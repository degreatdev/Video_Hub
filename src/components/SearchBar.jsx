import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, Box } from '@mui/material';
import {Search} from '@mui/icons-material';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);

            setSearchTerm('');
        }
    };

    return(
    <Paper
    component= "form"
    onSubmit= {handleSubmit}
    sx = {{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl : 2,
        boxShadow: 'none',
        mr: { sm: 5},
        width: {xs: '210px', md: '450px', sm:'450px'},
        height: {xs: '44px', md: '44px'},
        mt:{xs: '5px'}

        
    }}
    >
        <Box sx={{mt: {md:'8px', xs:'10px'}, width:{xs: '200px'}, ml:{xs: '-2px'}}}>
        <input 
        className= "search-bar"
        placeholder='Search...'
        value= {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
        />
        </Box>
        

        <IconButton type="submit" sx={{ p:'10px', color: 'red', ml: {xs: '150px', md: '380px', sm:'380px'}, mt: {md:'-55px', xs: '-22px'}}}>
            <Search />
        </IconButton>
    </Paper>
  )
}


export default SearchBar