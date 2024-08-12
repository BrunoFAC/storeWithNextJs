import { Slide } from '@mui/material';
import { TransitionProps } from 'notistack';
import { forwardRef, ReactElement, Ref } from 'react';

export const TransitionSlide = forwardRef(function Transition(
    props: TransitionProps & {
        // @ts-nocheck
        children: ReactElement<any, any>;
    },
    ref: Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});
