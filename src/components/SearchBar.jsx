import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
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
        height: {xs: '44px', md: '40px'},
        mt:{xs: '5px'}

        
    }}
    >

        <input 
        className= "search-bar"
        placeholder='Search...'
        value= {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        
        />

        <IconButton type="submit" sx={{ p:'10px', color: 'red', ml: {xs: '150px', md: '380px', sm:'380px'}, mt: {md:'-45px', xs: '-25px'}}}>
            <Search />
        </IconButton>
    </Paper>
  )
}


export default SearchBar