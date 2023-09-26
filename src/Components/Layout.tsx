import {ReactNode} from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
