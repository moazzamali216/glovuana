
import App from "next/app";
import Hero from '@/components/Hero';
import Video  from "@/components/Video";
import {HoriztonalSection}  from "@/components/HorizontalSection";
import {OurServices} from '@/components/Services';
import Nav from '@/components/Nav';
import { Discount } from "@/components/Discount";
import  WhatsAppButton  from "@/components/wabutton";
import MultiStepForm from "@/components/MultStepForm";
import  {WishList}  from "@/components/WIshList";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/> 
    <WhatsAppButton phoneNumber={+923224066958}/>
    <Video/>
    <Discount/>
    <WishList/>
    <HoriztonalSection/>
    <OurServices/>
    <MultiStepForm/>
    <Footer></Footer>
    </>
  );
}
