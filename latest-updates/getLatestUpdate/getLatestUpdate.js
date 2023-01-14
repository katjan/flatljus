const axios = require('axios');

exports.handler = async (event) => {
  try {
    const res = await axios.get('https://riksgransen.se/skidakning/snorapport-och-pistkarta/');
    return {
      statusCode: 200,
      body: res.data
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: 'Error: Failed to fetch the HTML'
    };
  }
};