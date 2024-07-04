import { FC } from 'react';
import { Box, Slide, Typography, useScrollTrigger } from '@mui/material';
import { Images } from '../../../public/images';
import { SectionsViews } from './sections.views';

const images = [
    {
        label: "Men's Section",
        imgPath: Images.Man.src,
        redirect: 'clothes',
    },
    {
        label: "Women's Section",
        imgPath: Images.Woman.src,
        redirect: 'clothes',
    },
    {
        label: 'Jewelry Section',
        imgPath: Images.Jewelry.src,
        redirect: 'jewelry',
    },
    {
        label: 'Electronics Section',
        imgPath: Images.Eletronic.src,
        redirect: 'eletronics',
    },
];

export const Sections: FC = () => {
    const sections = images.map((e) => {
        return { image: `url('${e.imgPath}')`, label: e.label, redirect: e.redirect };
    });

    const resources = {
        title: 'Sections',
    };

    const scrolled = useScrollTrigger();

    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: 200,
            }}
        >
            {!scrolled && (
                <Typography
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        backgroundColor: '#1876D2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                        width: '250%',
                        fontSize: '30px',
                        color: 'white',
                        height: '50px',
                    }}
                >
                    {resources.title}
                </Typography>
            )}
            <Slide appear={false} direction="down" in={scrolled}>
                <Typography
                    style={{
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        backgroundColor: '#1876D2',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'end',
                        width: '250%',
                        fontSize: '30px',
                        color: 'white',
                        height: '50px',
                        ...(scrolled && { position: 'fixed', top: 0, zIndex: 1 }),
                    }}
                >
                    {resources.title}
                </Typography>
            </Slide>
            <SectionsViews.SectionsLG sections={sections} />
            <SectionsViews.SectionsMD sections={sections} />
            <SectionsViews.SectionsXS sections={sections} />
        </Box>
    );
};
