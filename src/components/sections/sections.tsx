import { FC } from 'react';
import { Box } from '@mui/material';
import { SectionsViews } from './sections.views';
import { SectionsCards } from './sections.types';
import { Images } from '@/images';

const images = [
    {
        label: "Men's Section",
        image: Images.Man.src,
        redirect: 'clothes',
        gender: 'man',
    },
    {
        label: "Women's Section",
        image: Images.Woman.src,
        redirect: 'clothes',
        gender: 'woman',
    },
    {
        label: 'Jewelery Section',
        image: Images.Jewelery.src,
        redirect: 'jewelery',
        gender: '',
    },
    {
        label: 'Electronics Section',
        image: Images.Eletronic.src,
        redirect: 'electronics',
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
