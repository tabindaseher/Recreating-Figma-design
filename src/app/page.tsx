import Image from "next/image";
import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Management from "./components/work_management";
import Customise from "./components/extension";
import Work from "./components/customise";
import YourWork from "./components/your-work";
import Sponser from "./components/sponser";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Management/>
      <Customise/>
      <Work/>
      <YourWork/>
      <Sponser/>
      <Footer/>
    </div>
  );
}
