import  { useEffect, useState } from "react"
import { fetchOdds } from "../helpers/fetchOdds";
import '../stylesheets/App.scss';


function App() {
  const [odds, setOdds] = useState(null);

  useEffect(() => {
    const getOdds = async () => {
      const result = await fetchOdds("soccer_epl");

      if(result.success) {
        setOdds({ ...odds, data: result.data })
      }

      if(result.error) {
        console.log(`Error ${ result.data }`)
      }
    }

    getOdds();
  }, []);

  console.log("odds:", odds)
  return (
    <h1>Hello World</h1>
  );
}

export default App;
