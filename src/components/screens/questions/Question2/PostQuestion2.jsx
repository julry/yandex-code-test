import React from 'react';
import styled from 'styled-components';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { DialogText, MentorName } from '../../../shared/styledTexts';
import { coffeeBrake } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { Man } from '../../../shared/svg/Man';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Dialog } from '../../../shared/Dialog';
import { Post2Purple } from '../../../shared/svg/rectangles/Post2Purple';
import { Post2Yellow } from '../../../shared/svg/rectangles/Post2Yellow';

const Wrapper = styled(ContentWrapper)`
  background: rgba(8, 7, 22, 0.75);
`;

const TextBlock = styled(Dialog)`
  position: relative;
  padding: 4.533vw 4.5333vw 4.5333vw 5.8vw;
  width: 86.133vw;
  margin: min(24.8vw, 93px) 0 min(35.466vw, 133px) 6.4vw;
`;

const ManStyled = styled(Man)`
  position: absolute;
  bottom: -30.4vw;
  width: 27.2vw;
  height: 27.2vw;
  left: -10.4vw;
  z-index: -1;
  user-select: none;
  pointer-events: none;
`;

const PurpleRectangle = styled(Post2Purple)`
  position: absolute;
  top: -11.7vw;
  left: -9.6vw;
  width: 90.1333vw;
  height: 60.8vw;
  z-index: -4;
`;

const YellowRectangle = styled(Post2Yellow)`
  position: absolute;
  bottom: -5.9vw;
  right: -7.8vw;
  width: 53.867vw;
  height: 67.467vw;
  z-index: -4;
`;

export const PostQuestion2 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={coffeeBrake} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <TextBlock>
                    <MentorName>Ментор</MentorName>
                    <ManStyled/>
                    <DialogText>
                        {'Ты молодец! Созвон прошел успешно, первая задача \n' +
                            'выполнена — робот вливается \n' +
                            'в команду, и его тепло принимают!'}
                        <br/><br/>
                        {'Пора пойти с коллегами на брейк. Кофе, конечно, он выпить не может, но одновременно разрядить \n' +
                            'и подзарядить «мозг» точно \n' +
                            'не помешает.'}
                        <br/><br/>
                        {'Хмм… Кажется, что у людей возникли сложности с кофе-машиной…'}
                    </DialogText>
                    <PurpleRectangle />
                    <YellowRectangle />
                </TextBlock>
                <ButtonCentered onClick={next}>Разобраться</ButtonCentered>
            </Wrapper>
        </>
    );
};