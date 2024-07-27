import { NextPage } from 'next';
import { useEffect } from 'react';
import { useMarketStore, useTransactionStore } from '@/store';
import { DetailedCard } from '@/components';
import { useRouter } from 'next/router';
import { Paths } from '@/global';

const Detail: NextPage = () => {
    const detail = useTransactionStore((store) => store.detail);
    const setDetail = useTransactionStore((store) => store.setDetail);
    const setSection = useMarketStore((store) => store.setSection);
    const router = useRouter();

    useEffect(() => {
        if (detail === undefined) {
            router.push(Paths.Home);
        }
        return () => setDetail(undefined);
    }, [detail]);

    useEffect(() => {
        setSection(Paths.Detail);
    }, []);

    return (
        <div>
            <DetailedCard detail={detail} />
        </div>
    );
};
export default Detail;
