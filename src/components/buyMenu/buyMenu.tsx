import { FC } from 'react';
import { BuyMenusViews } from './buyMenu.views';

export const BuyMenu: FC = () => {
    return (
        <>
            <BuyMenusViews.FloatButton />
            <BuyMenusViews.BuyDrawer />
        </>
    );
};
