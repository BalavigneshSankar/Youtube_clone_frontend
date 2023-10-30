import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Box } from "@mui/material";
import { ChannelCard, Videos } from "./";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))
      .catch((error) => console.log(error.response));
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error.response));
  }, [id]);

  return (
    <Box sx={{ minHeight: "95vh" }}>
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(25,219,211,1) 40%, rgba(195,37,222,1) 76%)",
            height: "300px",
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>
      <Box sx={{ display: "flex", padding: 2 }}>
        <Box sx={{ marginRight: { sm: "100px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
