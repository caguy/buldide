import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  pages: {
    signIn: "/login",
  },
  providers: [
    Providers.Email({
      server: {
        port: process.env.EMAIL_PROVIDER_PORT,
        host: process.env.EMAIL_PROVIDER_HOST,
        secure: true,
        auth: {
          user: process.env.EMAIL_PROVIDER_USERNAME,
          pass: process.env.EMAIL_PROVIDER_PASSWORD,
        },
        tls: {
          rejectUnauthorized: false,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  database: process.env.MONGO_DB_URI,
  secret: process.env.HASH_SECRET,
});
