export enum Paths {
    Home = '/',
    Favorites = '/favorites',
    Clothes = '/clothes',
    Electronics = '/electronics',
    Jewelery = '/jewelery',
    Cart = '/cart',
    Detail = '/detail',
}
export interface PathsAndTitle {
    path: Paths;
    title: string;
}
export const Sections: PathsAndTitle[] = [
    { path: Paths.Clothes, title: 'Clothes' },
    { path: Paths.Electronics, title: 'Electronics' },
    { path: Paths.Jewelery, title: 'Jewelery' },
];
export const Transactions: PathsAndTitle[] = [
    { path: Paths.Cart, title: 'Cart' },
    { path: Paths.Favorites, title: 'Favorites' },
    { path: Paths.Detail, title: 'Detail' },
];
