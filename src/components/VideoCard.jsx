import {Link} from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';

const VideoCard = ({video: { id: {videoId}, snippet }}) => {
  

  return (
    <Card sx={{ width: {xs: '100%', sm: '350px', md: '300px'}, boxShadow: 0, borderRadius: 0}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl
        }>
        <CardMedia 
          alt={snippet?.title}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          sx={{ width: {
            xs: '100%', sm: '358px', md: '320px'
          }, height: 180 }}
        />
      </Link>

      <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px'}}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant='subtitle1' fontWeight="bold" color="#FFF" fontSize= '18px'>
          {snippet?.title.slice(0,70) || demoVideoTitle.slice(0,60)} <span style={{ color: '#F31503'}}> Click To Watch....</span>
        </Typography>
        </Link>

        <Link to={snippet?.channelId ?`/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant='subtitle2' fontWeight="bold" color="grey">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}/>
        </Typography>
        </Link>
      </CardContent>
    </Card>
  )
}

export default VideoCard