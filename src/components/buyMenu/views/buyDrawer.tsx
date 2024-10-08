import { useTransactionStore } from '@/store';
import { Drawer } from '@mui/material';
import { BuyMenusViews } from '../buyMenu.views';

export const BuyDrawer: React.FC = () => {
    const open = useTransactionStore((store) => store.openBuyDrawer);
    const setOpen = useTransactionStore((store) => store.setOpenBuyDrawer);

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
