import Image from "next/image";
import Client from "./Client";
import Compare from "./Compare";
import CostEffective from "./CostEffective";
import Designed from "./Designed";
import Experience from "./Experience";
import Footer from "./Footer";
import GetStart from "./GetStart";
import Header from "./Header";
import SelectRight from "./SelectRight";
import TestMonial from "./TestMonial";
import WhyUs from "./WhyUs";


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
