import { Link } from "react-router-dom";
import { demoProfilePicture, demoChannelTitle } from "../utils/constants";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const ChannelCard = ({ channelDetail, marginTop }) => {
  return (
    <Box
      sx={{
        width: { xs: "100%", sm: "358px" },
        height: "326px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        boxShadow: "none",
        margin: "auto",
        marginTop,
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            component="img"
            image={
              channelDetail?.snippet?.thumbnails?.high.url || demoProfilePicture
            }
            alt={channelDetail?.snippet?.title || demoChannelTitle}
            sx={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              marginBottom: 2,
              border: "1px solid #e3e3e3",
            }}
          />
          <Typography variant="h6" sx={{}}>
            {channelDetail?.snippet?.title || demoChannelTitle}
            <CheckCircle
              sx={{ fontSize: 14, marginLeft: "5px", color: "grey" }}
            />
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail.statistics.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
