import React from 'react';
import styled from 'styled-components';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { DialogText, MentorName } from '../../../shared/styledTexts';
import { workPlace } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { Man } from '../../../shared/svg/Man';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Dialog } from '../../../shared/Dialog';
import { Post1Purple } from '../../../shared/svg/rectangles/Post1Purple';
import { Post1Yellow } from '../../../shared/svg/rectangles/Post1Yellow';

const Wrapper = styled(ContentWrapper)`
  background: rgba(8, 7, 22, 0.75);
`;

const TextBlock = styled(Dialog)`
  position: relative;
  padding: 4.533vw 4.5333vw 4.5333vw 5.8vw;
  width: 86.133vw;
  margin: min(46.6vw, 175px) 0 min(36.266vw, 136px) 6.4vw;
  
  @media screen and (min-width: 600px) {
    white-space: normal;
  }
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

const PurpleRectangle = styled(Post1Purple)`
  position: absolute;
  top: -7.4vw;
  left: -6.4vw;
  width: 100vw;
  height: 49.866vw;
  z-index: -4;
`;

const YellowRectangle = styled(Post1Yellow)`
  position: absolute;
  bottom: -4.5vw;
  right: -7.467vw;
  width: 90.133vw;
  height: 37.8666vw;
  z-index: -4;
`;
export const PostQuestion1 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <TextBlock>
                    <MentorName>Ментор</MentorName>
                    <ManStyled/>
                    <DialogText>
                        {   'Отлично! Коллеги тоже рады знакомству.' }
                        <br/><br/>
                        {   'Хоть твой подопечный ' +
                            'и робот, его наравне со всеми ждут интересные задачи, лаунж-зона\n' +
                            'с массажным креслом, которое поможет даже его железной спине, и кофе-точки для подзарядки!\n' +
                            'Круто ведь!'
                        }
                    </DialogText>
                    <PurpleRectangle />
                    <YellowRectangle />
                </TextBlock>
                <ButtonCentered onClick={next}>Конечно, круто!</ButtonCentered>
            </Wrapper>
        </>
    );
};