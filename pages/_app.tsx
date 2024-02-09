import { useRouter } from "next/router";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import AdminLayout from "../components/adminLayout";
import FileUploader from "./contexts/FileUploader";
// import FileUploader from "../contexts/FileUploader";

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
          <Component {...pageProps} />
        </>
      </>
    );
  }
}

export default MyApp;
