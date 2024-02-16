import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AdminLayout from "../components/admin/adminLayout";

import UserLayout from "../components/user/userLayout/UserLayout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname == "/admin/login")
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  else if (router.pathname.includes("/admin")) {
    return (
      <>
        <AdminLayout>
          <Component {...pageProps} />
        </AdminLayout>
      </>
    );
  } else {
    return (
      <>
        <UserLayout>
          <Component {...pageProps} />
        </UserLayout>
      </>
    );
  }
}

export default MyApp;
