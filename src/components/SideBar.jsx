import {
  Checkroom,
  Code,
  DeveloperMode,
  FaceRetouchingNatural,
  FitnessCenter,
  GraphicEq,
  Home,
  LiveTv,
  MusicNote,
  OndemandVideo,
  School,
  SportsEsports,
  TheaterComedy,
} from "@mui/icons-material";
import { Stack } from "@mui/material";

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    { name: "New", icon: <Home /> },
    { name: "JS Mastery", icon: <Code /> },
    { name: "Coding", icon: <Code /> },
    { name: "ReactJS", icon: <Code /> },
    { name: "NextJS", icon: <Code /> },
    { name: "Music", icon: <MusicNote /> },
    { name: "Education", icon: <School /> },
    { name: "Podcast", icon: <GraphicEq /> },
    { name: "Movie", icon: <OndemandVideo /> },
    { name: "Gaming", icon: <SportsEsports /> },
    { name: "Live", icon: <LiveTv /> },
    { name: "Sport", icon: <FitnessCenter /> },
    { name: "Fashion", icon: <Checkroom /> },
    { name: "Beauty", icon: <FaceRetouchingNatural /> },
    { name: "Comedy", icon: <TheaterComedy /> },
    { name: "Gym", icon: <FitnessCenter /> },
    { name: "Crypto", icon: <DeveloperMode /> },
  ];

  return (
    <Stack
      sx={{
        flexDirection: { xs: "row", md: "column" },
        height: { xs: "auto", md: "95%" },
        overflowY: "auto",
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          className="category-btn"
          style={{
            color: "#fff",
            backgroundColor: category.name === selectedCategory && "#FC1503",
          }}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 1 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
