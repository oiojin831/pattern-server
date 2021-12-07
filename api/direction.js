import axios from 'axios';
export default async function (req, res) {
  const options = {
    method: 'GET',
    url: 'https://naveropenapi.apigw.ntruss.com/map-direction/v1/driving',
    params: {
      start: req.query.start,
      goal: req.query.goal,
    },
    headers: {
      'X-NCP-APIGW-API-KEY-ID': process.env.X_NCP_APIGW_API_KEY_ID,
      'X-NCP-APIGW-API-KEY': process.env.X_NCP_APIGW_API_KEY,
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}
