import { NextPage } from 'next';
import { useEffect } from 'react';
import { Box } from '@mui/material';
import { useRouter } from 'next/router';
import { DetailedCard } from '@/components';
import { Paths } from '@/global';
import { removeDuplicates } from '@/helpers';
import { useMarketStore } from '@/store';

const Favorites: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);
    const favorites = useMarketStore((store) => store.favorites);
    const router = useRouter();

    useEffect(() => {
        if (!favorites.length) {
            setTimeout(() => router.push(Paths.Home), 200);
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
