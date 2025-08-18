import { createRoot } from "react-dom/client";
import ReactLogo from "./ReactLogo.tsx";
import Nav from "./Nav.tsx"
import FactsTitle from "./FactsTitle.tsx";
import FactsList from "./FactsList.tsx";
import Footer from "./Footer.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Élément #root introuvable dans le DOM");
}
const root = createRoot(rootElement);

root.render(
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
