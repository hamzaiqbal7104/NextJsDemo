import Image from "next/image";
import Client from "./contents/Client";
import Compare from "./contents/Compare";
import CostEffective from "./contents/CostEffective";
import Designed from "./contents/Designed";
import Experience from "./contents/Experience";
import Footer from "./contents/Footer";
import GetStart from "./contents/GetStart";
import Header from "./contents/Header";
import SelectRight from "./contents/SelectRight";
import TestMonial from "./contents/TestMonial";
import WhyUs from "./contents/WhyUs";


export default function Content() {
  return (
    <div className="content-container d-flex flex-column">
      <Header />
      <Client />
      <WhyUs />
      <SelectRight />
      <Experience />
      <CostEffective />
      <Designed />
      <Compare />
      <TestMonial />
      <GetStart />
      <Footer />
    </div>
  )
}
