import { FC } from 'react';
import { SkeletonLg } from './skeleton.lg';
import { SkeletonMD } from './skeleton.md';
import { SkeletonXS } from './skeleton.xs';

export const Skeleton: FC = () => {
    return (
        <>
            <SkeletonLg />
            <SkeletonMD />
            <SkeletonXS />
        </>
    );
};
