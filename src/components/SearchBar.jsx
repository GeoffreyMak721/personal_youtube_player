import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

import json2mq from "json2mq";
import useMediaQuery from "@mui/material/useMediaQuery";

const SearchBar = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();

  const matches = useMediaQuery(
    json2mq({
      maxWidth: 440,
    })
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {matches ? (
        <>
          {!showSearch ? (
            <IconButton
              onClick={() => setShowSearch(!showSearch)}
              sx={{ p: "10px", color: "#fee53b" }}
              aria-label="search"
            >
              <SearchIcon />
            </IconButton>
          ) : (
            <Paper
              sx={{
                borderRadius: 20,
                border: "2px solid #fee53b",
                pl: 2,
                boxShadow: "none",
                position: "absolute",
                right: 15,
                left: 15,
                top: 12,
                zIndex: 10,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <IconButton
                onClick={() => setShowSearch(!showSearch)}
                sx={{ p: "10px", color: "#fee53b" }}
                aria-label="search"
                size="large"
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
              <input
                className="search-bar"
                placeholder="Recherche..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <IconButton
                sx={{ p: "10px", color: "#fee53b" }}
                aria-label="search"
                size="large"
              >
                <SearchIcon fontSize="inherit" />
              </IconButton>
            </Paper>
          )}
        </>
      ) : (
        <Paper
          sx={{
            borderRadius: 20,
            border: "2px solid #fee53b",
            pl: 2,
            boxShadow: "none",
          }}
        >
          <input
            className="search-bar"
            placeholder="Recherche..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <IconButton
            type="submit"
            sx={{ p: "10px", color: "#fee53b" }}
            aria-label="search"
            size="large"
          >
            <SearchIcon fontSize="inherit" />
          </IconButton>
        </Paper>
      )}
    </form>
  );
};

export default SearchBar;
