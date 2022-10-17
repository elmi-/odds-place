import  { useEffect } from "react"
import { fetchOdds } from "../helpers/fetchOdds";
import '../stylesheets/App.scss';


function App() {
  useEffect(() => {
    fetchOdds("soccer_epl");
  }, [])
  return (
    <h1>Hello World</h1>
  );
}

export default App;
