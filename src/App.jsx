import useStoreWebsiteDataToLocalStorage from "./Hooks/App/useStoreWebsiteDataToLocalStorage";
import AppRoutes from "./Routes/AppRoutes";
import { Analytics } from "@vercel/analytics/react";

function App() {
  // Store necessary website data locally
  useStoreWebsiteDataToLocalStorage();

  return (
    <>
      <AppRoutes />
      <Analytics />
    </>
  );
}

export default App;
