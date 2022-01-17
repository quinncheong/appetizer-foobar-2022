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
      text,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// Get summary of text: Text will be sanitized
// Return -> Object { summary: [], keywords: [] }
export const getSummary = (text) => {
  console.log("Getting summary");
  return axios
    .post(videoSummaryAPI, {
      text,
    })
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.response);
      alert("There was an error");
    });
};
