// No need to import "react" just for JSX in React 17+
// import sword from "../images/swc-sword.png";
// import swordSvg from "../images/sword.svg";

import "./styles/index.scss";
import Recipes from "./components/Recipes";
import { Users } from "./components/Users";
const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Herro, React. Mani</h1>
          <Users />
          {/* <img src={sword} alt="sword" width="250" />
          <img src={swordSvg} alt="sword" width="250" /> */}
          {/* <Recipes /> */}
        </section>
      </main>
    </>
  );
};

export default App;
