import React from "react";
import { Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";

import { categories } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => {
            if (category.href) {
              navigate(category.href);
              return;
            }
            setSelectedCategory(category.name);
          }}
          style={{
            background: category.name === selectedCategory && "#fee53b",
            color: "white",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "white" : "#fee53b",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Categories;
