import { Theme } from '../store';

export const lightTheme: Theme = {
    type: 'light',
    light: '#ffffff',
    primary: '#1876D2',
    secondary: '#114092',
    primaryLight: '#ffffff',
    darkGray: '#545D65',
    shadow: 'rgba(0, 0, 0, 0.6)',
    transparent: 'transparent',
    lightGray: '#bbb6b6',
    gray: '#A0B3C2',
    fadedPrimary: '#1876d2b0',
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
};
