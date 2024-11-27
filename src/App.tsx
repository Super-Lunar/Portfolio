import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Technical from "./components/Technical";
import { SelectedPage } from "./constants/selectedPage";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  return (
    <div className=" text-stone-300 antialiased">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-8">
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Profile />
        <Technical />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App;
