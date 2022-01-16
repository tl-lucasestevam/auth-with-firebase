import type { NextPage } from "next";
import { withPublic } from "../hooks/routes";

const Login: NextPage = ({ auth }: any) => {
  const { loginWithGoogle, user, error } = auth;
  return (
    <div>
      {error && <h1>{error}</h1>}
      <button onClick={loginWithGoogle}>Google</button>
      <h1>{user?.uid}</h1>
    </div>
  );
};

export default withPublic(Login);
