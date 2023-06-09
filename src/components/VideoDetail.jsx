import React, {useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Button } from '@mui/material';


import {Videos, Loader} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const [videos, setVideos] = useState(null);
  const [videoDetail, setVideoDetail] = useState(null);
    const {id} = useParams();

      // console.log(videoDetail);  //CHECKS THE PROPERTIES OF VIDEO-DETAILS

    useEffect(() => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
      .then((data) => setVideos(data.items));
    },[id]);

    //Activate scroll to the top of the page
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    if (!videoDetail?.snippet) return <Loader/>;

    const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount} } = videoDetail;
    

  return (
    <Box minHeight='95vh'>
      
      <Stack direction={{ xs: 'column', sm:'column', md: 'row'}}>
        <Box flex={1}>
            <Box sx={{ width: '100%', position: 'sticky',top: '86px'}}>
              <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
              className="react-player" controls
              />
              <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
                {title}
              </Typography>

              <Stack direction='row' justifyContent='space-between' sx={{ color: '#fff' }} py={1} px={2}>
                <Link to={`/channel/${channelId}`}>
                  <Typography variant={{ sm:'subtitle1', xs:'subtitle2', md: 'h5'}} color='#fff'>
                    {channelTitle}
                    <CheckCircle sx={{ fontSize: '15px', color: 'gray', ml: '8px'}}/>
                  </Typography>
                </Link>


                <Stack direction='row' gap={{md:'20px', xs: '5px', sm:'25px'}} alignItems='center'>
                  <Typography variant='body2' sx={{ opacity: '0.7'}}>
                    {parseInt(viewCount).toLocaleString()} Views
                  </Typography>

                  <Typography variant='body2' sx={{ opacity: '0.7'}}>
                    {parseInt(likeCount).toLocaleString()} Likes
                  </Typography>
                </Stack>
              </Stack>

              {/*A download button for the video playing on the ReactPlayer component
              The Button redirects to the www.yout.com platform when clicked, and with the video ID the video is fetched */}
              <Stack> 
              <Button onClick={() => { window.open(`https://www.yout.com/watch?v=${id}`);}}> 
                <Box sx={{ width: '100%', backgroundColor:'#FC1503', height:'50px'}} justifyContent="center" alignItems="center" display='flex'>
                
                  <Typography variant={{ sm:'subtitle1', xs:'subtitle2', md: 'h5', fontWeight:'bold'}} color='#fff'>
                    Download
                  </Typography>
                </Box>
                </Button>
              </Stack>
              {/*The redirection button ends here!!!*/}

            </Box>
        </Box>

        <Box px={2} py={{md: 1, xs: 5}} justifyContent='center' alignItems='center'>
          <Typography variant='h5' fontWeight='bold' mb={2} sx={{ color: 'white'}}>
          Similar <span style={{ color: '#F31503'}}>Videos:</span> 
          </Typography>
          <Videos videos={videos} direction={{md:'column'}} mr='0px'/>
          
        </Box>
      </Stack>

    </Box>
  );
};

export default VideoDetail
