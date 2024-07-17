import { NextPage } from 'next';
import { useEffect } from 'react';
import { useMarketStore } from '../store';
import { DetailedCard } from '../components';

const Detail: NextPage = () => {
    const setSection = useMarketStore((store) => store.setSection);

    useEffect(() => {
        setSection('detail');
    }, []);

    return (
        <div>
            <DetailedCard />
        </div>
    );
};
export default Detail;
