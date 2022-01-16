import { useAuth } from "../hooks/auth";

export default function AppLayout({ children }) {
  const auth = useAuth();

  return (
    <main>
      <nav>
        <span>Default Layout</span>
        {auth.user?.displayName}
      </nav>
      {children}
    </main>
  );
}
