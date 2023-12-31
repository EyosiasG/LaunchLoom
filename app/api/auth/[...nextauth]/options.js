import GoogleProvider from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials";

export const options = {
    providers: [
        GoogleProvider({
            profile(profile){
                console.log("Google Profile:", profile);

                let userRole = "Google User";
                return{
                    ...profile,
                    id: profile.sub,
                    userRole: userRole
                }
            },

            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),

        Credentials({
            name: "Credentials",
            credentials:{
                email:{
                    label:"Email",
                    type: "text",
                    placeholder: "Enter your email"
                },
                password:{
                    label:"Email",
                    type: "password",
                    placeholder: "Enter your email"
                }
            }
        })
        

    ]
}

