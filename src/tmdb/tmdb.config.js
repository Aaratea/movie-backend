const key = process.env.TMDB_KEY;

const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);

  return `https://api.themoviedb.org/3/${endpoint}?api_key=6785b1695a6dcaadd5f07764d099b2c0&${qs}`;
};

export default { getUrl };