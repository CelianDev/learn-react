import {createRoot} from "react-dom/client"
import ReactLogo from "./ReactLogo.tsx"
import FactsTitle from "./FactsTitle.tsx"
import FactsList from "./FactsList.tsx"

const rootElement = document.getElementById("root");
if (!rootElement) {
    throw new Error('Élément #root introuvable dans le DOM');
}
const root = createRoot(rootElement)

root.render(
    <>  
        <ReactLogo />
        <FactsTitle />
        <FactsList />
    </>
)