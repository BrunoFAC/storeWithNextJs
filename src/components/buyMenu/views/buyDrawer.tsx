import { useMarketStore } from '@/store';
import { Drawer } from '@mui/material';
import { BuyMenusViews } from '../buyMenu.views';

export const BuyDrawer: React.FC = () => {
    const open = useMarketStore((store) => store.openBuyDrawer);
    const setOpen = useMarketStore((store) => store.setOpenBuyDrawer);

    const toggleDrawer = () => () => {
        setOpen(false);
    };

    return (
        <div>
            <Drawer open={open} anchor="right" onClose={toggleDrawer()}>
                <BuyMenusViews.BuyDrawerMD toggleDrawer={toggleDrawer} />
                <BuyMenusViews.BuyDrawerXS toggleDrawer={toggleDrawer} />
            </Drawer>
        </div>
    );
};
