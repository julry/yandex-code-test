import React from 'react';
import styled from 'styled-components';
import { reception } from '../../constants/images';
import { colors } from '../../constants/colors';
import { openHref } from '../../utils/openHref';
import { BackgroundBlurred, BackgroundWrapper, DarkenWrapper } from '../shared/wrappers';
import { BorderBlock } from '../shared/BorderBlock';
import { Medium, RegularDescription } from '../shared/styledTexts';
import { ButtonCentered } from '../shared/ButtonCentered';
import { MailPurple } from '../shared/svg/rectangles/MailPurple';
import { MailYellow } from '../shared/svg/rectangles/MailYellow';

const Wrapper = styled(DarkenWrapper)`
  padding: min(25.333vw, 95px) 6.9333vw 10px;
`;

const TextBlock = styled(BorderBlock)`
  display: flex;
  flex-direction: column;
  padding: 5.06vw 4.833vw 5.06vw 5.06vw;
  width: 100%;
  margin-bottom: min(5.333vw, 20px);
`;

const FTGroupLink = styled.span`
  border-bottom: 1px solid ${colors.textGray};
`;

const RectanglePurple = styled(MailPurple)`
  position: absolute;
  width: 108.533vw;
  max-width: 407px;
  left: -11.2vw;
  top: -6.6666vw;
  height: 52vw;
  max-height: 195px;
  z-index: -2;
`;

const RectangleYellow = styled(MailYellow)`
  position: absolute;
  width: 118.4vw;
  max-width: 444px;
  right: -23.2666vw;
  bottom: -8.5333vw;
  height: 53.3333vw;
  max-height: 200px;
  z-index: -2;
`;

export const MailForm = () => {
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={reception} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <TextBlock>
                    <RegularDescription>
                        {
                            'Поздравляем, ты отлично справился! Первый рабочий день прошёл успешно. ' +
                            'В Яндексе тебя ждёт ещё много интересных задач, ценного опыта и классная команда.\n' +
                            'Подавай заявку на настоящую стажировку в '
                        }
                        <Medium>Telegram-боте</Medium>!
                        {'\n Кнопка ниже — твой портал для старта карьеры в IT!'}
                    </RegularDescription>
                    <br/>
                    <ButtonCentered onClick={() => openHref('https://t.me/young_yandex_bot', 'apply')}>
                        Подать заявку
                    </ButtonCentered>
                    <br/>
                    <RegularDescription>
                        {'Розыгрыш Яндекс Станций уже закончился — его результаты смотри\n'}
                        <FTGroupLink onClick={() => openHref('https://vk.com/itfutru')}>
                            {'в группе FutureToday'}
                        </FTGroupLink>
                    </RegularDescription>
                    <RectanglePurple/>
                    <RectangleYellow/>
                </TextBlock>
            </Wrapper>
        </>
    );
};
