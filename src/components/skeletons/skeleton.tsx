import { FC } from 'react';
import { SkeletonLg } from './views/skeleton.lg';
import { SkeletonMD } from './views/skeleton.md';
import { SkeletonXS } from './views/skeleton.xs';

export const Skeleton: FC = () => {
    return (
        <>
            <SkeletonLg />
            <SkeletonMD />
            <SkeletonXS />
        </>
    );
};
