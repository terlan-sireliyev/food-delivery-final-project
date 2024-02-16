import { useRouter } from "next/router";
import '../styles/globals.css'
import type { AppProps } from "next/app";
import AdminLayout from "../components/admin/adminLayout";
import NavbarComp from "../components/user/navbarComp/navbarComp";
import FooterComp from "../components/user/footerComp/footerCompt";

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
          {/* <FileUploader> */}
          <Component {...pageProps} />
          {/* </FileUploader> */}
        </AdminLayout>
      </>
    );
  } else {
    return (
      <>
        <>
          <NavbarComp />
          <Component {...pageProps} />
          <FooterComp />
        </>
      </>
    );
  }
}

export default MyApp;
