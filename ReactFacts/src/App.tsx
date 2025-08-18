import ReactLogo from "./ReactLogo.tsx";
import Nav from "./Nav.tsx";
import FactsTitle from "./FactsTitle.tsx";
import FactsList from "./FactsList.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <>
      <header>
        <ReactLogo />
        <Nav />
      </header>
      <main>
        <FactsTitle />
        <FactsList />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
