export enum Paths {
    Home = '/',
    Favorites = '/favorites',
    Clothes = '/clothes',
    Electronics = '/electronics',
    Jewelery = '/jewelery',
    Cart = '/cart',
    Detail = '/detail',
    Profile = '/profile',
    Confirmation = '/confirmation',
}
export interface PathsAndTitle {
    path: Paths;
    title: string;
    type: NavigationType;
}
export type NavigationType = 'transaction' | 'section' | 'default';
export const navigationItems: PathsAndTitle[] = [
    {
        path: Paths.Home,
        title: 'Sections',
        type: 'default',
    },
    {
        path: Paths.Clothes,
        title: 'Clothes',
        type: 'section',
    },
    {
        path: Paths.Electronics,
        title: 'Electronics',
        type: 'section',
    },
    {
        path: Paths.Jewelery,
        title: 'Jewelery',
        type: 'section',
    },
    {
        path: Paths.Profile,
        title: 'Profile',
        type: 'section',
    },
    {
        path: Paths.Cart,
        title: 'Cart',
        type: 'transaction',
    },
    {
        path: Paths.Favorites,
        title: 'Favorites',
        type: 'transaction',
    },
    {
        path: Paths.Detail,
        title: 'Detail',
        type: 'transaction',
    },
    {
        path: Paths.Confirmation,
        title: 'Confirm payment',
        type: 'transaction',
    },
];
