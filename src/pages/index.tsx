import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Link href="/app">admin</Link>
      <Link href="/login">login</Link>
    </div>
  );
};

export default Home;
