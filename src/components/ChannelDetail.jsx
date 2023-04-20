import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const [videos, setVideos] = useState([])
  const [channelDetail, setChannelDetail] = useState(null)

  const {id} = useParams();

  // console.log(channelDetail);  CHECKS THE PROPERTIES OF VIDEO-DETAILS

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items));
  }, [id])

  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,238,247,1) 0%, rgba(205,5,184,1) 75%)', 
        zIndex: 10, height: '300px'
      }}
        />

        <ChannelCard channelDetail={channelDetail} marginTop='-109px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{ mr:{ sm: '120px'}}}/>
          <Videos videos={videos}/>

      </Box>
      
    </Box>
  )
}

export default ChannelDetail
