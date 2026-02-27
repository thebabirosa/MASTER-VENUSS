import Audience from "./components/Audience";
import Ecosystem from "./components/Ecosystem";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Methodology from "./components/Methodology";
import Offer from "./components/Offer";
import Philosophy from "./components/Philosophy";
import ProblemSolution from "./components/ProblemSolution";
import SocialProof from "./components/SocialProof";
import WealthBuilding from "./components/WealthBuilding";

export default function App() {
  return (
    <main className="bg-venus-bg min-h-screen overflow-x-hidden selection:bg-venus-gold selection:text-white">
      <Hero />
      <WealthBuilding />
      <ProblemSolution />
      <Philosophy />
      <Audience />
      <Methodology />
      <Ecosystem />
      <Offer />
      <SocialProof />
      <Footer />
    </main>
  );
}
