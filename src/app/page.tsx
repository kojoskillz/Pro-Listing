import '../app/globals.css';
import AnimatedGridPatternDemo from '../components/Grid_background';
// import ShinyButtonDemo from '../components/Grid_background';
import FloatingNavDemo from '../components/Navbar';
import ShineBorderDemo from '../components/Card';
import  StickyScrollRevealDemo from '../components/Sticky_Scroll_Reveal_Card';
import TextRevealDemo from '../components/TextReveal';
import AccordionDemo from '../components/Accordion';
import MagicCardDemo  from '../components/Magic_card';
import Partnership  from '../components/Partnership';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';





export default function Home() {
  return (
    <>
        <FloatingNavDemo />
        <AnimatedGridPatternDemo />
        {/* <ShinyButtonDemo /> */}
        <TextRevealDemo />
        <ShineBorderDemo />
        <StickyScrollRevealDemo />
        <MagicCardDemo />
        <Partnership />
        <Testimonials />
        <AccordionDemo />
        <Footer />
      
       
    </>

  );
}
