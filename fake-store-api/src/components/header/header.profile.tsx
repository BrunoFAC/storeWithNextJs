import * as React from "react";
import {
  Box,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Zoom,
  alpha,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export const HeaderProfile: React.FC = () => {
  const [anchorUser, setAnchorUser] = React.useState<null | HTMLElement>(null);
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorUser(null);
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip TransitionComponent={Zoom} title="Cart">
        <IconButton
          sx={() => ({
            p: 0,
            color: "white",
            borderRadius: 0,
            mr: 0.75,
            "&:hover": {
              bgcolor: "transparent",
            },
          })}
          style={{
            padding: 4,
            width: "min-content",
          }}
        >
          <Typography fontSize={16}>0</Typography>
          <ShoppingCartOutlinedIcon />
        </IconButton>
      </Tooltip>
      <Tooltip TransitionComponent={Zoom} title="Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Bruno" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
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
