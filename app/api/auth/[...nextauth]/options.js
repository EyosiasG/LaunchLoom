import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import User from "@/app/models/User";
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';
import { connectToDatabase } from "@/app/services/DBService";


export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            async profile(profile) {
                await connectToDatabase();
                console.log("Google Profile:", profile);

                const { email } = profile;

                console.log("Email", email);

                const foundUser = await User.findOne({ email: email })
                    .lean()
                    .exec();


                if (!foundUser) {
                    console.log("USer not found, creating a new account");
                    const password = await bcrypt.hash(uuid(), 10);
                    console.log("Password: ",password);
                    const user = new User({
                        email: email,
                        password: password
                    });

                    console.log("User: ", user);

                    try {
                        await User.create(user);
                        console.log("User created: ", email);
                    } catch (e) {
                        console.log("Error creating user: ", e);
                    }
                }

                let userRole = "Google User";
                return {
                    ...profile,
                    id: profile.sub,
                    userRole: userRole,
                }
            },

            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        Credentials({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "Enter your email"
                },
                password: {
                    label: "Email",
                    type: "password",
                    placeholder: "Enter your email"
                }
            },
            id: "login",
            async authorize(credentials) {
                await connectToDatabase();
                try {
                  const foundUser = await User.findOne({ email: credentials.email })
                    .lean()
                    .exec();
        
                  if (foundUser) {
                    console.log("User Exists");
                    const match = await bcrypt.compare(
                      credentials.password,
                      foundUser.password
                    );
        
                    if (match) {
                      console.log("Good Pass");
                      delete foundUser.password;
        
                      foundUser["role"] = "Unverified Email";
                      return foundUser;
                    }
                  }
                } catch (error) {
                  console.log("Error signing in: ",error);
                }
                return null;
              },
            }),

    ],
    callbacks: {
        async jwt({ token, user }) {
          if (user) token.role = user.role;
          return token;
        },
        async session({ session, token }) {
          if (session?.user) session.user.role = token.role;
          return session;
        },
      },
}

