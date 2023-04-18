import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SchoolIcon from '@mui/icons-material/School';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

export const logo = 'https://i.ibb.co/s9Qys2j/logo.png';

export const categories = [
  { name: 'New', icon: <HomeIcon />, },
  { name: 'JS Mastery', icon: <CodeIcon />, },
  { name: 'Coding', icon: <CodeIcon />, },
  { name: 'ReactJS', icon: <CodeIcon />, },
  { name: 'NextJS', icon: <CodeIcon />, },
  { name: 'Music', icon: <MusicNoteIcon /> },
  { name: 'Education', icon: <SchoolIcon />, },
  { name: 'Podcast', icon: <GraphicEqIcon />, },
  { name: 'Movie', icon: <OndemandVideoIcon />, },
  { name: 'Gaming', icon: <SportsEsportsIcon />, },
  { name: 'Live', icon: <LiveTvIcon />, },
  { name: 'Sport', icon: <FitnessCenterIcon />, },
  { name: 'Fashion', icon: <CheckroomIcon />, },
  { name: 'Beauty', icon: <FaceRetouchingNaturalIcon />, },
  { name: 'Comedy', icon: <TheaterComedyIcon />, },
  { name: 'Gym', icon: <FitnessCenterIcon />, },
  { name: 'Crypto', icon: <DeveloperModeIcon />, },
];

const profileLink = 'data:image/png;base64,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'

export const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
export const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
export const demoVideoUrl = '/video/GDa8kZLNhJ4';
export const demoChannelTitle = 'JavaScript Mastery';
export const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
export const demoProfilePicture = profileLink;