import LogoutIcon from '@mui/icons-material/Logout';
import LightSwitch from './LightSwitch';
import {
    Toolbar,
    AppBar,
    Select,
    Button,
    MenuItem,
    FormControl,
    Typography,
    Box,
    Popper,
    InputLabel,
    Fade,
} from '@mui/material';
import { useState } from 'react';

export default function Bar({ isDarkTheme, changeTheme }) {
    const [category, setCategory] = useState('Funny');
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [placement, setPlacement] = useState();

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
                    </Box>
                    <Box>
                        {/* <img id='logo' src='/joke.jpeg' alt='logo' width='481' height='80' /> */}
                        <Typography variant='h1' sx={{fontFamily: 'Ribeye', color: 'cornflowerblue'}}>Dad Jokes</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <LightSwitch sx={{ marginLeft: '10%' }} theme={isDarkTheme} onChange={changeTheme} />
                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                                <Fade {...TransitionProps} timeout={350}>
                                    <Typography sx={{ p: 2 }}>
                                        <Button sx={{ marginRight: '-20px', mr: 2 }} id='navButton' size='large' aria-label='Logout' type='submit'>
                                            Not Logout <LogoutIcon />
                                        </Button>
                                    </Typography>
                                </Fade>
                            )}
                        </Popper>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}