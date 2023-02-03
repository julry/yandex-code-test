import React from 'react';
import styled from 'styled-components';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { workPlace2 } from '../../../../constants/images';
import { useProgress } from '../../../../hooks/useProgress';
import { BackgroundBlurred, BackgroundWrapper, DarkenWrapper } from '../../../shared/wrappers';
import { DialogText, MentorName } from '../../../shared/styledTexts';
import { Man } from '../../../shared/svg/Man';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Dialog } from '../../../shared/Dialog';
import { PostInter2Purple } from '../../../shared/svg/rectangles/PostInter2Purple';
import { PostInter2Yellow } from '../../../shared/svg/rectangles/PostInter2Yellow';

const TextBlock = styled(Dialog)`
  position: relative;
  padding: 4.533vw 4.2666vw 4.5333vw 5.8vw;
  width: 86.133vw;
  margin: min(45.8666vw, 172px) 0 min(32.5333vw, 1221px) 6.4vw;
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

const PurpleRectangle = styled(PostInter2Purple)`
  position: absolute;
  top: -9.06vw;
  left: -10.9vw;
  width: 106.4vw;
  max-width: 399px;
  max-height: 179px;
  height: 47.73vw;
  z-index: -4;
`;

const YellowRectangle = styled(PostInter2Yellow)`
  position: absolute;
  bottom: -8.2666vw;
  right: -9.4666vw;
  width: 65.8666vw;
  height: 37.6vw;
  max-height: 141px;
  max-width: 247px;
  z-index: -4;
`;

export const PostInteract2 = () => {
    const {next} = useProgress();

    const onNext = () => {
      reachMetrikaGoal('q4');
      next();
    };

    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace2} alt={''}/>
            </BackgroundWrapper>
            <DarkenWrapper>
                <TextBlock>
                    <MentorName>Ментор</MentorName>
                    <ManStyled/>
                    <DialogText>
                        {'Благодаря тебе теперь ' +
                            'у кофемашины отличное настроение, и она рада угостить всех вкусными напитками!'
                        }
                        <br/><br/>
                        {
                            'Товарищи-коллеги насытились кофе, плотно поели, а наш робот успешно получил заряд эмоций ' +
                            'и батареи. Пора уходить с кухни, и приниматься обратно за работу!'
                        }
                    </DialogText>
                    <PurpleRectangle />
                    <YellowRectangle />
                </TextBlock>
                <ButtonCentered onClick={onNext}>Далее</ButtonCentered>
            </DarkenWrapper>
        </>
    );
};