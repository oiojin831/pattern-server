import axios from 'axios';
const SEARCH_BASE_URL = 'https://openapi.naver.com/v1/search/local.json';

const createOptions = (url, params, headers, method = 'GET') => {
  return {
    method,
    url,
    params,
    headers,
  };
};
export default async function (req, res) {
  const options = createOptions(
    SEARCH_BASE_URL,
    { query: req.query.start },
    {
      'X-Naver-Client-Id': process.env.X_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.X_NAVER_CLIENT_SECRET,
    }
  );
  const response = await axios.request(options);
  const options2 = createOptions(
    SEARCH_BASE_URL,
    { query: req.query.goal },
    {
      'X-Naver-Client-Id': process.env.X_NAVER_CLIENT_ID,
      'X-Naver-Client-Secret': process.env.X_NAVER_CLIENT_SECRET,
    }
  );
  const response2 = await axios.request(options2);
  const data = response.data.items[0];
  const data2 = response2.data.items[0];
  res.send({
    startX: data.mapx,
    startY: data.mapy,
    goalX: data2.mapx,
    goalY: data2.mapy,
  });
}
