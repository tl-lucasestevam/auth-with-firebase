import "../config/firebaseConfig";
import { AuthProvider } from "../hooks/auth";
import AppLayout from "../layout/AppLayout";
import AuthStateChanged from "../layout/AuthStateChanged";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppLayout>
        <AuthStateChanged>
          <Component {...pageProps} />
        </AuthStateChanged>
      </AppLayout>
    </AuthProvider>
  );
}

export default MyApp;
