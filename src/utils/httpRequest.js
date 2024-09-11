import axios from "axios";
import NProgress from "nprogress";
import { store } from "~/redux/store";

NProgress.configure({ showSpinner: false });

const httpRequest = axios.create({
  baseURL: "http://localhost:8081/",
});

// Add a request interceptor
httpRequest.interceptors.request.use(
  function (config) {
    console.log(">>>> check store", store.getState());
    const access_token = store?.getState()?.user?.access?.access_token;
    config.headers["Authorization"] = "Bearer " + access_token;

    NProgress.start();

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
httpRequest.interceptors.response.use(
  function (response) {
    NProgress.done();
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response.data ? response.data : response;
  },
  function (error) {
    NProgress.done();
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return error.response.data ? error.response.data : Promise.reject(error);
  }
);

export default httpRequest;
