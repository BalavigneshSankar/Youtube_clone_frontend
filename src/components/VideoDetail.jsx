import { Box, Stack, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useState, useEffect } from "react";
import { CheckCircle } from "@mui/icons-material";
import Videos from "./Videos";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))
      .catch((error) => console.log(error.response));
    fetchFromAPI(`search?part=snippet&type=video&relatedToVideoId=${id}`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error.response));
  }, [id]);

  if (!videoDetail) return "Loading...";

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Stack sx={{ flexDirection: { xs: "column", md: "row" } }}>
        <Box
          sx={{
            flex: 1,
            alignSelf: "flex-start",
            position: { md: "sticky" },
            top: "70px",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              controls
              className="react-player"
            />
            <Typography
              variant="h5"
              sx={{ color: "#fff", fontWeight: "bold", padding: 2 }}
            >
              {title}
            </Typography>
            <Stack
              sx={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingX: 2,
                paddingY: 1,
              }}
            >
              <Link to={`/channel/${channelId}`}>
                <Typography variant="h6" sx={{ color: "#fff" }}>
                  {channelTitle}
                  <CheckCircle
                    sx={{ fontSize: "12px", marginLeft: "5px", color: "grey" }}
                  />
                </Typography>
              </Link>
              <Stack
                sx={{ flexDirection: "row", alignItems: "center", gap: "20px" }}
              >
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, color: "#fff" }}
                >
                  {parseInt(viewCount).toLocaleString()} Views
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ opacity: 0.7, color: "#fff" }}
                >
                  {parseInt(likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{
            paddingX: 2,
            paddingY: { xs: 5, md: 1 },
          }}
        >
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
