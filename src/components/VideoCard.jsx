import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

import { format, formatDistance } from "date-fns";
import numeral from "numeral";
import { convertTime } from "../utils/helpers";
import { fr } from "date-fns/locale";

const VideoCard = ({ video: { id, snippet, contentDetails, statistics } }) => {
  const videoId = id?.videoId || id;
  const { title, channelId, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
        backgroundColor: "transparent",
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <Card
          sx={{
            boxShadow: "none",
            width: { xs: "100%", sm: "358px", md: "320px" },
            borderRadius: 6,
            backgroundColor: "transparent",
            position: "relative",
          }}
        >
          <CardMedia
            image={(thumbnails && thumbnails.medium?.url) || demoThumbnailUrl}
            alt={title}
            sx={{
              width: { xs: "100%", sm: "358px" },
              height: 180,
            }}
          />
          {contentDetails?.duration && (
            <Box
              sx={{
                backgroundColor: "rgba(0,0,0,0.8)",
                color: "#fff",
                position: "absolute",
                bottom: 10,
                right: 15,
                p: 0.5,
                py: 0,
                borderRadius: 1,
              }}
            >
              {convertTime(contentDetails?.duration)}
            </Box>
          )}
        </Card>
      </Link>
      <CardContent
        sx={{ backgroundColor: "transparent", height: "106px", p: 0, mt: 2 }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <ListItemText
            primary={title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
            sx={{ color: "#FFF" }}
            secondary={
              <Stack direction="column" mt={1}>
                <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
                  <Typography variant="caption" color="#eee">
                    {channelTitle || demoChannelTitle}
                    <CheckCircleIcon
                      sx={{
                        fontSize: "12px",
                        color: "#eee",
                        ml: "5px",
                      }}
                    />
                  </Typography>
                </Link>
                {statistics?.viewCount && (
                  <Typography variant="caption" color="#eee">
                    {numeral(statistics?.viewCount)
                      .format("0 a")
                      ?.toUpperCase()}{" "}
                    vues -{" "}
                    {formatDistance(new Date(publishedAt), new Date(), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </Typography>
                )}
              </Stack>
            }
          />
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
