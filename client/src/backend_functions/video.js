import axios from "axios";

/*
It actually makes a call to http://localhost:8000/api/xxxx but we have done a proxy
on package.json
*/
const createVideoAPI = "/api/video/createVideo";
const videoSummaryAPI = "/api/video/getSummary";

export const generateVideo = (text) => {
  console.log("inside the generate Video Function");
  return axios
    .post(createVideoAPI, {
      text: "Hello this is a testing text that we are going to use for testing the backend connection! Welcome everyone to spanish class woohoo!! I love languages because it makes me hungry and I can eat food!",
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const getSummary = (text) => {
  return axios
    .post(videoSummaryAPI, {
      text
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      alert('There was an error')
    });
};
