import * as React from 'react';
import { Box, IconButton, Typography, Menu, Avatar, Tooltip, MenuItem, Zoom, alpha } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useMarketStore } from '../../store/market.store';
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const HeaderProfile: React.FC = () => {
    const cart = useMarketStore((store) => store.cart);
    const cartLength = cart.length;
    const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorUser(null);
    };

    return (
        <Box sx={{ flexGrow: 0, display: 'flex', flexDirection: 'row' }}>
            <Tooltip TransitionComponent={Zoom} title="Cart">
                <IconButton
                    sx={() => ({
                        p: 0,
                        color: 'white',
                        borderRadius: 0,
                        mr: 0.75,
                        '&:hover': {
                            bgcolor: 'transparent',
                        },
                    })}
                    style={{
                        padding: 4,
                        width: 'min-content',
                    }}
                >
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <ShoppingCartOutlinedIcon />
                        {cartLength > 0 ? <Typography fontSize={10}>{cartLength}</Typography> : null}
                    </Box>
                </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} sx={{ p: 0, display: { xs: 'flex', md: 'none' } }} title="Settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: { xs: 'flex', md: 'none' } }}>
                    <Avatar
                        alt="Bruno"
                        src="/static/images/avatar/2.jpg"
                        style={{ fontSize: '1rem', width: '30px', height: '30px' }}
                    />
                </IconButton>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Settings" sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, display: { xs: 'none', md: 'flex' } }}>
                    <Avatar alt="Bruno" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
};
