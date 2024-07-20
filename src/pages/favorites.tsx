import { NextPage } from 'next';
import { useEffect } from 'react';
import { useMarketStore } from '../store';
import { DetailedCard } from '../components';
import { Box } from '@mui/material';
import { removeDuplicates } from '../helpers';
import { useRouter } from 'next/router';
import { Paths } from '../global';

const Favorites: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);
    const favorites = useMarketStore((store) => store.favorites);
    const router = useRouter();

    useEffect(() => {
        if (!favorites.length) {
            router.push(Paths.Home);
        }
    }, [favorites]);

    useEffect(() => {
        setSection(Paths.Favorites);
    }, []);

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: '16px',
                width: '100%',
            }}
        >
            <Box style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%' }}>
                {removeDuplicates(favorites).map((e, index) => (
                    <DetailedCard key={`${e.id}-${index}`} detail={e} />
                ))}
            </Box>
        </Box>
    );
};
export default Favorites;
