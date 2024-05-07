import axios from "axios";

axios.defaults.baseURL = "https://bikeindex.org/api";

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent

    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {

    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
