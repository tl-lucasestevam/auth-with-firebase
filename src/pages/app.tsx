import type { NextPage } from "next";
import { withProtected } from "../hooks/routes";

const App: NextPage = ({ auth }: any) => {
  const { logout } = auth;
  return (
    <div>
      <h1>App</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withProtected(App);
