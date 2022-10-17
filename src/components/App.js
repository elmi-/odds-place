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

  if(!odds) {
    return null;
  }

  return (
    <ul>
      {
        odds.data.map((game) => {
          return <li>{ game.away_team } - { game.home_team }</li>
        })
      }
    </ul>
  );
}

export default App;
