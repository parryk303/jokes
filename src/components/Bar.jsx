import TerminalIcon from '@mui/icons-material/Terminal';
import LightSwitch from './LightSwitch';
import {
    Toolbar,
    AppBar,
    Select,
    MenuItem,
    FormControl,
    Typography,
    Box,
    InputLabel,
    IconButton,
} from '@mui/material';
import { useState } from 'react';

export default function Bar({ isDarkTheme, changeTheme, changeTerminal }) {
    const [category, setCategory] = useState('Funny');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1, width: '100%' }}>
            <AppBar id={`${isDarkTheme ? 'navDark' : 'nav'}`} position='static'>
                <Toolbar id='tool' sx={{ justifyContent: 'space-between', padding: '1%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FormControl sx={{ m: 1, minWidth: 80 }}>
                            <InputLabel sx={{ fontFamily: 'Ribeye', size: 'medium' }}>Category</InputLabel>
                            <Select sx={{ fontFamily: 'Vast' }}
                                id='script'
                                value={category}
                                onChange={handleChange}
                                autoWidth
                                label='category'
                            >
                                <MenuItem id='script' value={'Funny'} sx={{ fontFamily: 'Vast' }}>Funny</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton id='adminButton' size='large' aria-label='Terminal' sx={{ mr: 2 }} onClick={changeTerminal}>
                            <TerminalIcon fontSize='large' />
                        </IconButton>
                    </Box>
                    <Box>
                        <Typography variant='h1' sx={{ fontFamily: 'Ribeye', color: 'cornflowerblue' }}>Dad Jokes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <LightSwitch sx={{ marginLeft: '10%' }} theme={isDarkTheme} onChange={changeTheme} />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}