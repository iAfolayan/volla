import "../styles/globals.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProSidebarProvider>
      <Component {...pageProps} />
    </ProSidebarProvider>
  );
}
