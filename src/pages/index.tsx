import { NextPage } from 'next';
import { Sections } from '@/components';
import { useMarketStore } from '@/store';
import { useEffect } from 'react';
import { Paths } from '@/global';

const Index: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection(Paths.Home);
    }, []);

    return (
        <div>
            <Sections />
        </div>
    );
};
export default Index;
