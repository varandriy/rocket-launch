import * as axios from 'axios';

const baseURL = 'https://lldev.thespacedevs.com/2.2.0';

export const userAPI = {
  getUpcomingLaunches: () => {
    return axios.get(`${baseURL}/launch/upcoming/?limit=50`);
  },
};
