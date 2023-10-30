import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box } from "@mui/material";
import {
  RootLayout,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Feed /> },
      { path: "/video/:id", element: <VideoDetail /> },
      { path: "/channel/:id", element: <ChannelDetail /> },
      { path: "/search/:searchTerm", element: <SearchFeed /> },
    ],
  },
]);

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <RouterProvider router={router} />
    </Box>
  );
};

export default App;
