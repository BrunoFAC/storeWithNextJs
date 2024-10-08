import * as React from 'react';
import { Box, Container, IconButton, Tooltip, Typography, Zoom, alpha } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useMarketStore } from '@/store';
import { resources } from '@/global';

export const Footer: React.FC = () => {
    const themeStore = useMarketStore((store) => store.theme);

    const openLinks = (link: string) => {
        window.open(link, '_blank');
    };
    return (
        <Box
            style={{
                display: 'flex',
                backgroundColor: themeStore.primary,
                height: '150px',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            <Container
                maxWidth="xl"
                style={{
                    paddingTop: 25,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '8px',
                    }}
                >
                    <Typography
                        color={themeStore.light}
                        fontSize={'14px'}
                        sx={{ lineHeight: 1.75 }}
                        textTransform={'uppercase'}
                    >
                        {resources.contacts}
                    </Typography>
                    <Box style={{ display: 'flex', flexDirection: 'row' }}>
                        <Tooltip title={resources.github} TransitionComponent={Zoom}>
                            <IconButton
                                onClick={() => openLinks(resources.github)}
                                sx={(theme) => ({
                                    p: 0,
                                    color: themeStore.light,
                                    mr: 0.75,
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.common.white, 0.3),
                                    },
                                })}
                                style={{
                                    padding: 4,
                                    display: 'flex',
                                    justifyContent: 'start',
                                    width: 'min-content',
                                }}
                            >
                                <GitHubIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={resources.linkedIn} TransitionComponent={Zoom}>
                            <IconButton
                                onClick={() => openLinks(resources.linkedIn)}
                                sx={(theme) => ({
                                    p: 0,
                                    color: themeStore.light,
                                    '&:hover': {
                                        bgcolor: alpha(theme.palette.common.white, 0.3),
                                    },
                                })}
                                style={{
                                    padding: 4,
                                    display: 'flex',
                                    justifyContent: 'start',
                                    width: 'min-content',
                                }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Box>
                <Box style={{ display: 'flex' }}>
                    <Typography
                        style={{
                            color: themeStore.lightGray,
                            fontSize: '10px',
                            width: '100%',
                            justifyContent: 'center',
                            paddingBottom: '25px',
                        }}
                        sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                    >
                        {resources.footer}
                    </Typography>
                    <Typography
                        style={{
                            color: themeStore.lightGray,
                            fontSize: '10px',
                            width: '100%',
                            justifyContent: 'start',
                            padding: '0px 0px 25px 0px',
                        }}
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
                    >
                        {resources.footer}
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};
