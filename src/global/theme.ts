import { Theme } from '@/store';

export const lightTheme: Theme = {
    type: 'light',
    light: '#ffffff',
    primary: '#1876D2',
    secondary: '#114092',
    primaryLight: 'rgb(231 228 228 / 60%)',
    darkGray: '#545D65',
    shadow: 'rgba(0, 0, 0, 0.6)',
    transparent: 'transparent',
    lightGray: '#bbb6b6',
    gray: '#A0B3C2',
    fadedPrimary: '#1876d2b0',
    fadedBackground: `linear-gradient(60deg, #1876D2 0%, #114092 92%)`,
    green: 'green',
    red: 'red',
    divider: 'linear-gradient(90deg, #bbb6b6 0%, rgba(247, 247, 247, 0) 92%)',
    border: 'rgb(160, 179, 194)',
};

export const darkTheme: Theme = {
    type: 'dark',
    light: '#ffffff',
    primary: 'rgb(40 48 53)',
    secondary: '#1876D2',
    primaryLight: '#17232be0',
    darkGray: 'rgb(255 255 255 / 42%)',
    shadow: 'rgba(0, 0, 0, 0.6)',
    transparent: 'transparent',
    lightGray: '#bbb6b6',
    gray: '#A0B3C2',
    fadedPrimary: 'rgb(25 41 50 / 96%)',
    fadedBackground: `linear-gradient(60deg, rgb(25 41 50 / 96%) 0%, rgba(255, 255, 255, 0) 92%)`,
    green: 'green',
    red: 'red',
    divider: 'linear-gradient(90deg, rgb(255 255 255 / 96%) 0%, rgb(247 247 247 / 0%) 92%)',
    border: 'white',
};
