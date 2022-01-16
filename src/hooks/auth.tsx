import { createContext, useContext, useState } from "react";
import FirebaseAuth from "../services/FirebaseAuth";

interface AuthProviderProps {
  children: JSX.Element;
}

interface AuthContextValues {
  user: any;
  setUser: (arg: any) => void;
  error: any;
  loginWithGoogle: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextValues>({} as AuthContextValues);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);
  const [error, setError] = useState("");

  const loginWithGoogle = async () => {
    const { error, user } = await FirebaseAuth.loginWithGoogle();
    setError(error ?? "");
    setUser(user ?? null);
  };

  const logout = async () => {
    await FirebaseAuth.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, error, loginWithGoogle, logout, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
