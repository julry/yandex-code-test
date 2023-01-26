import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { reception } from '../../constants/images';
import { BackgroundBlurred, BackgroundWrapper, DarkenWrapper } from '../shared/wrappers';
import { useProgress } from '../../hooks/useProgress';
import { BorderBlock } from '../shared/BorderBlock';
import { Medium, RegularDescription, RegularText } from '../shared/styledTexts';
import { ButtonCentered } from '../shared/ButtonCentered';
import { openHref } from '../../utils/openHref';
import { colors } from '../../constants/colors';
import { MailPurple } from '../shared/svg/rectangles/MailPurple';
import { MailYellow } from '../shared/svg/rectangles/MailYellow';

const Wrapper = styled(DarkenWrapper)`
  padding: min(25.333vw, 95px) 6.9333vw 10px;
`;

const TextBlock = styled(BorderBlock)`
  display: flex;
  flex-direction: column;
  padding: 5.06vw 4.533vw 5.06vw 5.06vw;
  width: 100%;
  margin-bottom: min(5.333vw, 20px);
`;

const Form = styled.div`
  position: relative;
  z-index: 3;
  margin: 0 auto;
  padding: min(4vw, 15px) 0 0;
  width: 65vw;
  max-width: 245px;
`;

const Input = styled.input`
  border-radius: 5px;
  touch-action: none;
  border: none;
  padding-right: 5px;
  background: inherit;
  font-size: 18px;
  color: inherit;
  width: 100%;
  font-family: 'Yandex Sans', Tahoma, Geneva, sans-serif;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 330px) {
    font-size: 15px;
  }
`;

const InputCheckboxStyled = styled.input`
  display: none;
`;

const RadioIconStyled = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1px solid ${colors.textGray};
  border-radius: 5px;
  margin-right: 10px;
  @media screen and (min-width: 1000px) {
    width: 24px;
    height: 24px;
  }
`;

const LabelStyled = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 12px;

  @media screen and (min-width: 1000px) {
    margin-top: auto;
  }

  & ${InputCheckboxStyled}:checked + ${RadioIconStyled}:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: ${colors.yellow};
  }
`;

const TextWrapperStyled = styled.div`
  display: flex;
  align-items: center;
  min-height: 100%;
`;

const TextStyled = styled(RegularText)`
  font-size: 9px;
  @media screen and (min-width: 350px) and (min-height: 700px) {
    font-size: 10px;
  }

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }

  @media screen and (min-width: 1000px) {
    font-size: 14px;
  }
`;

const PersonalDataLink = styled.span`
  border-bottom: 1px solid ${colors.textGray};
`;

const InputWrapper = styled.div`
  padding: 8px 12px;
  border: 1px solid ${colors.textGray};
  border-radius: 5px;
  font-size: 18px;
  color: ${colors.textGray};
  @media screen and (max-width: 330px) {
    font-size: 16px;
  }
`;

const sending = keyframes`
  0% {
    scale: 1;
  }
  50% {
    scale: 1.06;
  }
  100% {
    scale: 1;
  }
`;

const SendBtn = styled(ButtonCentered)`
  margin-top: min(5.333vw, 20px);
  transform-origin: 50% 50%;
  animation: ${sending} ${({animation}) => animation ? '1.5s' : 0} infinite cubic-bezier(0.785, 0.135, 0.15, 0.86);
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
    const {next} = useProgress();
    const [mail, setMail] = useState('');
    const [agreement, setAgreement] = useState(false);
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={reception} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <TextBlock>
                    <RegularDescription>
                        {
                            'Поздравляем, ты отлично справился! Первый рабочий день прошел успешно. ' +
                            'В Яндексе тебя ждет ещё много интересных задач, ценного опыта и классная команда. \n' +
                            'Регистрируйся на настоящую стажировку — переходи в '
                        }
                        <Medium>TG-канал Яндекса!</Medium>
                    </RegularDescription>
                    <br/>
                    <RegularDescription>
                        {
                            'И приятный бонус — ты можешь выиграть '
                        }
                        <Medium> Яндекс.Станцию</Medium>
                        {
                            '. Для участия в розыгрыше оставь свою почту'
                        }
                    </RegularDescription>
                    <Form>
                        <InputWrapper>
                            <Input
                                type="email"
                                placeholder="example@post.ru"
                                name="XmnwAc"
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                                required
                            />
                        </InputWrapper>
                        <LabelStyled
                            onTouchStart={() => setAgreement(value => !value)}
                        >
                            <InputCheckboxStyled
                                type={'radio'}
                                name={'agreement'}
                                checked={agreement}
                            />
                            <RadioIconStyled/>
                            <TextWrapperStyled>
                                <TextStyled>
                                    {'Я согласен на '}
                                    <PersonalDataLink
                                        onClick={() => openHref('https://fut.ru/personal_data_policy/')}
                                    >
                                        обработку персональных данных
                                    </PersonalDataLink>
                                    {'\nи получение информационных сообщений'}
                                </TextStyled>
                            </TextWrapperStyled>
                        </LabelStyled>
                    </Form>
                    <SendBtn
                        width={'65vw'}
                        onClick={next}
                        disabled={!agreement || mail.length < 5}
                    >
                        Отправить
                    </SendBtn>
                    <RectanglePurple/>
                    <RectangleYellow/>
                </TextBlock>
                <ButtonCentered width={'65vw'} onClick={next}>Подать заявку</ButtonCentered>
            </Wrapper>
        </>
    );
};
