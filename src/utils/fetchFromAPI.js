import axios from "axios";

export const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url, params = {}) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: 20,
      key: "AIzaSyCD2RHiZA2gkY1jaxRTtVyuUD1kHypyIK4",
      ...params,
    },
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ytc-access-token")}`,
    },
  });

  return data;
};

//AIzaSyCD2RHiZA2gkY1jaxRTtVyuUD1kHypyIK4
