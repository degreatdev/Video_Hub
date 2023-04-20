import { Stack, Typography } from '@mui/material';
import {Link} from 'react-router-dom';


import {logo} from '../utils/constants';
import SearchBar from './SearchBar';

const Navbar = () =>  (
    <div>
      
      <Stack 
      direction="row" alignItems="center" 
      p={2} 
      sx={{ position : 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}} >

        <Link to="/" style={{ display: 'flex', alignItems: 'center'}}>
          <img src={logo} alt='logo' height={45} /> 
          <Typography variant={{sm: 'h5'}} color='#fff' ml='9px' fontWeight='bold' fontSize={{xs: '14px'}}> 
            V-Hub
          </Typography>
        </Link>

        <SearchBar />
      </Stack>
      
    </div>
  )

export default Navbar