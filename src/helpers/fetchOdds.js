import axios from "axios";

const getOptions = (key) => {
  return {
    method: 'GET',
    url: `https://odds.p.rapidapi.com/v4/sports/${ key }/odds`,
    params: {
      regions: 'us',
      oddsFormat: 'american',
      markets: 'h2h,spreads',
      dateFormat: 'iso'
    },
    headers: {
      'X-RapidAPI-Key': 'ef92c2852cmshd4094578df32e44p141dc4jsneb0e9b5eefc9',
      'X-RapidAPI-Host': 'odds.p.rapidapi.com'
    }
  }
}

export const fetchOdds = async (key) => {
  const options = getOptions(key);
  try {
    const result = await axios.request(options);
    return {
      success: true,
      data: result.data.data
    }
  } catch (err) {
    console.log(`Error: ${ err }`);
  }
}