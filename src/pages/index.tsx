import { NextPage } from 'next';
import { Sections } from '../components/sections/sections';
import { useMarketStore } from '../store';
import { useEffect } from 'react';

const Index: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection('sections');
    }, []);

    return (
        <div>
            <Sections />
        </div>
    );
};
export default Index;
