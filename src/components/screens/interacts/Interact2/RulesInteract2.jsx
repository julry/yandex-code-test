import React from 'react';
import { coffeeBrake } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { BackgroundBlurred, BackgroundWrapper } from '../../../shared/wrappers';
import { Rules2 } from './Rules2';

export const RulesInteract2 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={coffeeBrake} alt={''}/>
            </BackgroundWrapper>
            <Rules2 close={next}/>
        </>
    );
};
