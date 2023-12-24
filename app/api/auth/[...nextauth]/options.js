import GoogleProvider from "next-auth/providers/google"

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
        })
    ]
}

