import About from "./Pages/About";
import Awards from "./Pages/Awards";
import Education from "./Pages/Education";
import Experience from "./Pages/Experience";
import Interest from "./Pages/Interest";
import Navigation from "./Pages/Navigation";
import Profile from "./Pages/Profile";
import Projects from "./Pages/Projects";
import Skill from "./Pages/Skill";
import Strength from "./Pages/Strength";

function App() {
  return (
    <div>
      <Navigation />
      <div className="container-fluid p-0">
        <About />
        <hr className="m-0" />
        <Profile />
        <hr className="m-0" />
        <Experience />
        <hr className="m-0" />
        <Education />
        <hr className="m-0" />
        <Skill />
        <hr className="m-0" />
        <Strength />
        <hr className="m-0" />
        <Projects />
        <hr className="m-0" />
        <Interest />
        <hr className="m-0" />
        <Awards />
      </div>
    </div>
  );
}

export default App;
