import { ChangeEvent, FC } from 'react';
import { Avatar, IconButton, styled } from '@mui/material';
import { useProfileStore } from '@/store';
import { resources } from '@/global';
import { useSnackbar } from 'notistack';
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export const AvatarGuest: FC = () => {
    const setImage = useProfileStore((store) => store.setImage);
    const image = useProfileStore((store) => store.image);
    const fullName = useProfileStore((store) => store.fullName);
    const { enqueueSnackbar } = useSnackbar();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files ? event.target.files[0] : undefined;
        if (selectedFile) {
            const fileType = selectedFile.type;
            if (fileType !== 'image/png' && fileType !== 'image/jpeg' && fileType !== 'image/svg+xml') {
                enqueueSnackbar(resources.disallowedImages, {
                    variant: 'error',
                });
            } else {
                setImage(URL.createObjectURL(selectedFile));
            }
        }
    };

    return (
        <IconButton component="label" role={undefined} tabIndex={-1}>
            <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            <Avatar
                alt={fullName?.toLocaleUpperCase() ?? resources.guest}
                src={image ?? '.'}
                sx={{ display: { xs: 'none', md: 'flex' }, fontSize: '2rem', width: '65px', height: '65px' }}
            />
            <Avatar
                alt={fullName?.toLocaleUpperCase() ?? resources.guest}
                src={image ?? '.'}
                sx={{ display: { xs: 'flex', md: 'none' }, fontSize: '1.3rem', width: '80px', height: '80px' }}
            />
        </IconButton>
    );
};
