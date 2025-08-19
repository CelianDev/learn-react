import { createRoot } from "react-dom/client";
import App from "./App.tsx";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Élément #root introuvable dans le DOM");
}
const root = createRoot(rootElement);

root.render(<App />);