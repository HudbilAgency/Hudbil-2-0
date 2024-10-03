import { BrowserRouter as Router } from "react-router-dom"; 
import Routers from "./Routes/Routes";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routers />
      </Router>
    </>
  );
}

export default App;