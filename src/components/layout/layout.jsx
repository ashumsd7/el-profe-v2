import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout(props) {
  return (
    <section className="">
      <Navbar />
      <main className="mx-2">{props.children}</main>
      <Footer />
    </section>
  );
}

export default Layout;
