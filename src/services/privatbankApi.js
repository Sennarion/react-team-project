import axios from 'axios';

export const privatbankApi = {
  getExchangeRate() {
    return axios.get(
      'https://api.privatbank.ua/p24api/pubinfo?exchange&coursid=5'
    );
  },
};
