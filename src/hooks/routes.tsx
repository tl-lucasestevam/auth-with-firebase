import { useRouter } from "next/router";
import { useAuth } from "./auth";

export function withPublic(Element: any) {
  return function WithPublic(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (auth.user) {
      router.replace("/app");
      return <h1>Loading</h1>;
    }

    return <Element auth={auth} {...props} />;
  };
}

export function withProtected(Element: any) {
  return function WithProtected(props: any) {
    const auth = useAuth();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/login");
      return <h1>Loading</h1>;
    }

    return <Element auth={auth} {...props} />;
  };
}
