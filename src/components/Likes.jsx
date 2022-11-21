import React, { useState, useEffect } from "react";
import { Typography, Box } from "@mui/material";
import { Videos } from ".";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Subscriptions = () => {
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`videos`, {
      part: "snippet,contentDetails,statistics",
      myRating: "like",
      maxResults: 20,
    }).then((data) => {
      console.log(data);
      setVideos(data.items);
    });
  }, []);

  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Likes
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        {<Videos videos={videos} />}
      </Box>
    </Box>
  );
};

export default Subscriptions;
