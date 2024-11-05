import { BlogHomeScreen } from "@/screens/BlogHomeScreen";
import Head from "next/head";

export default function BlogHome() {
  return (
    <>
      <Head>
        <title>FH - Blog</title>
      </Head>
      <BlogHomeScreen />;
    </>
  );
}
