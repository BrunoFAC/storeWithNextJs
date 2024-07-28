import { FC } from 'react';
import { Box } from '@mui/material';
import { SectionsViews } from './sections.views';
import { SectionsCards } from './sections.types';
import { Images } from '@/images';
import { Paths, resources } from '@/global';

const images = [
    {
        label: resources.manSection,
        image: Images.Man.src,
        redirect: Paths.Clothes,
        gender: 'man',
    },
    {
        label: resources.womanSection,
        image: Images.Woman.src,
        redirect: Paths.Clothes,
        gender: 'woman',
    },
    {
        label: resources.jewelerySection,
        image: Images.Jewelery.src,
        redirect: Paths.Jewelery,
        gender: '',
    },
    {
        label: resources.electronicsSection,
        image: Images.Eletronic.src,
        redirect: Paths.Electronics,
        gender: '',
    },
];

export const Sections: FC = () => {
    const sections = images.map((e) => ({ ...e, image: `url('${e.image}')` })) as SectionsCards[];

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SectionsViews.SectionsLG sections={sections} />
            <SectionsViews.SectionsMD sections={sections} />
            <SectionsViews.SectionsXS sections={sections} />
        </Box>
    );
};
