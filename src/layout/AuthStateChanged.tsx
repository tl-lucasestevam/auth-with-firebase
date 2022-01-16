import React, { useEffect, useState } from "react";
import { useAuth } from "../hooks/auth";
import FirebaseAuth from "../services/FirebaseAuth";

export default function AuthStateChanged({ children }) {
  const { setUser } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    FirebaseAuth.waitForUser((userCred) => {
      setUser(userCred);
      setLoading(false);
    });
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return children;
}
