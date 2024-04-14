import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AdminLayout from "../components/admin/adminLayout";
import RegNavbarComp from "../components/user/registerLayout/registerLayout";
import UserLayout from "../components/user/userLayout/UserLayout";
import "../styles/globals.css";

import isAuth from "./isAuth";
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  if (router.pathname == "/admin")
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  else if (router.pathname.includes("/admin")) {
    return (
      <>
        {useEffect(() => {
          if (isAuth()) {
            setTimeout(() => router.push("../admin"), 0);
            return;
          }
        }, [])}
        <AdminLayout>
          <>
            <Component {...pageProps} />
            <Head>
              <title>Admin Panel</title>
              {/* <meta http-equiv="refresh" content="10"></meta> */}
              <meta name="description" content="Generated by create next app" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
          </>
        </AdminLayout>
      </>
    );
  } else if (
    router.pathname == "/user/login" ||
    router.pathname == "/user/register"
  ) {
    return (
      <>
        <RegNavbarComp>
          <Component {...pageProps} />
        </RegNavbarComp>
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
