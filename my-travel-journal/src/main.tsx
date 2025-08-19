import { createRoot } from "react-dom/client";
import App from "./App";

const divRoot = document.getElementById("root");

if (!divRoot) {
  throw new Error("Élément #root introuvable dans le DOM");
}

const root = createRoot(divRoot);

root.render(<App />);
