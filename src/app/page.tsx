import Background from "../app/components/background";
import Navbar from "../app/components/navbar";
import WelcomeSection from "../app/components/welcomesection";
import Footer from "../app/components/footer";

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 z-[-1]">
        <Background />
      </div>
      
      <Navbar/>

      <WelcomeSection/>

      <Footer/>

    </>
  );
}
