import AppRouter from "./routes/AppRouter";
import { Header } from "modules";
import "./assets/fonts/Montserrat/index.scss";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
