import axios from "axios";
const { REACT_APP_LIVE_SPORTS_ODDS_API_KEY, REACT_APP_HOST } = process.env;

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
      'X-RapidAPI-Key': REACT_APP_LIVE_SPORTS_ODDS_API_KEY,
      'X-RapidAPI-Host': REACT_APP_HOST
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
    return {
      error: true,
      data: err
    }
  }
}