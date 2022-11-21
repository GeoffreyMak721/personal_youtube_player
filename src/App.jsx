import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  Loader,
  Login,
  Home,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#6e6e6e" }}>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Home />}>
            <Route path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
};
export default App;
