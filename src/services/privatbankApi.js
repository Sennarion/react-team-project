import axios from 'axios';

export const privatbankApi = {
  getExchangeRate() {
    return axios.get('https://ewallet-api.onrender.com/api/currency?type=cash');
  },
};
