
import App from "next/app";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Nav from '@/components/Nav';


export default function Home() {
  return (
    <>
    <Nav/>
    <Hero/> 
    <Services/>
    </>
  );
}
