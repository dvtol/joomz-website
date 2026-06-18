import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  // Use /login as the custom sign-in page
  pages: {
    signIn: "/login",
  },

  callbacks: {
    // Persist the user id into the JWT token
    jwt({ token, user }) {
      if (user?.id) token.id = user.id;
      return token;
    },
    // Expose the id on the session object
    session({ session, token }) {
      if (token?.id && typeof token.id === "string") {
        session.user.id = token.id;
      }
      return session;
    },
  },
});
