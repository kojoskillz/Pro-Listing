import '../app/globals.css';
import AnimatedGridPatternDemo from '../components/Grid_background';
// import ShinyButtonDemo from '../components/Grid_background';
import FloatingNavDemo from '../components/Navbar';
import ShineBorderDemo from '../components/Card';
import TextRevealDemo from '../components/TextReveal';
// import BentoDemo from '../components/BentoGrid';





export default function Home() {
  return (
    <>
        <FloatingNavDemo />
        <AnimatedGridPatternDemo />
        {/* <ShinyButtonDemo /> */}
        <TextRevealDemo />
        <ShineBorderDemo />
        {/* <BentoDemo /> */}
      
       
    </>

  );
}
