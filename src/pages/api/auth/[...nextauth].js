import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async session({session, token, user}) {
      session.user.username = session.user.name.split(' ').join('_').toLowerCase()
      session.user.uid = token.sub
      return session
    }
  }
}

export default NextAuth(authOptions)
