import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props) {
  return (
    <section className="">
      <Navbar />
      <main className="h-[85vh] overflow-scroll ">{props.children}</main>
      <Footer />
    </section>
  );
}

export default Layout;
