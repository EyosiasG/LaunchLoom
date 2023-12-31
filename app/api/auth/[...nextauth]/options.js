import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";
import User from "@/app/models/User";
import { uuid } from 'uuidv4';
import bcrypt from 'bcrypt';


export const options = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            async profile(profile) {
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

            async authorize(credentials) {

                const foundUser = User.findOne({ email: credentials.email })
                    .lean()
                    .exec();

                if (foundUser) {
                    const match = await bcrypt.compare(foundUser.password, credentials.password);
                    if (match) {
                        delete foundUser.password;
                        foundUser["role"] = "unverified email"

                        return foundUser;
                    }
                }
                else {
                    const res = await fetch("http://localhost:3000/api/users", {
                        method: "POST",
                        body: JSON.stringify({ credentials }),
                        "content-type": "application/json"
                    });
                    if (!res.ok) {
                        const response = await res.message;
                        console.log(response);
                    } else {
                        const createdUser = await res.user;
                        console.log("User Created, new logging in", user);
                        createdUser["role"] = "Unverified Email";
                        return createdUser;
                    }

                    return;
                }

            }
        })


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

