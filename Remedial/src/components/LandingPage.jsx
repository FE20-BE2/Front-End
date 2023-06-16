import FirstSection from "./dashboard/FirstSection";
import SecondSection from "./dashboard/SecondSection";
import ThirdSection from "./dashboard/ThirdSection";
import FourSection from "./dashboard/FourSection";
import FiveSection from "./dashboard/FiveSection";
import SevenSection from "./dashboard/SevenSection";
import Footer from "/src/components/kelas/Footer";


function LandingPage() {
    return (
      <>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourSection />
        <FiveSection />
        <SevenSection />
        <Footer />
      </>
    )
  }
  
  export default LandingPage;