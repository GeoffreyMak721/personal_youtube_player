import axios from "axios";

export const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
  params: {
    maxResults: 50,
  },
  headers: {
    "X-RapidAPI-Key": "2121cf8a59msh3d926fa444f5c7fp105f62jsnb2a64243f627",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
