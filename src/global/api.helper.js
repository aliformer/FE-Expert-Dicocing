import CONFIG from './config';

const API_HELPER = {
  option(data) {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      body: JSON.stringify(data),
    };
  },

  async check(response) {
    if (response.status === 200) {
      const responseJson = await response.json();
      return responseJson;
    }
    return response.status;
  },

};

export default API_HELPER;
