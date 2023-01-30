import React, { useEffect, useState } from 'react';
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
import { sendDataToForms } from '../../utils/sendDataToForms';

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
  
  @media screen and (min-width: 700px) {
    max-width: 300px;
  }
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

  @media screen and (min-width: 768px) {
    white-space: normal;
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
  border: 1px solid ${({valid}) => valid ? colors.textGray : 'red'};
  border-radius: 5px;
  font-size: 18px;
  color: ${colors.textGray};
  transition: border 0.3s ease-in;
  
  @media screen and (max-width: 330px) {
    font-size: 16px;
  }
`;

const sending = keyframes`
  0% {
      background: ${colors.purple};
  }
  50% {
      background: transparent;
  }
  100% {
    background: ${colors.purple};
  }
`;

const SendBtn = styled(ButtonCentered)`
  margin-top: min(5.333vw, 20px);
  transform-origin: 50% 50%;
  animation: ${sending} ${({animation}) => animation ? '2s' : 0} infinite ease-in;
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
    const [animation, setAnimation] = useState(false);
    const [validMail, setValidMail] = useState(true);

    const onOpen = (e) => {
        e.stopPropagation();
        openHref('https://fut.ru/personal_data_policy/');
    };

    const onSend = () => {
        if (!validMail) return;
        setAnimation(true);
        sendDataToForms({mail}).then(() => {
            setAnimation(false);
            // openHref('')
        })
    };

    const checkValidMail = () => {
        return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail);
    };

    useEffect(() => {
        if (validMail) return;
        setValidMail(checkValidMail());
    }, [mail])
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
                            'В Яндексе тебя ждет ещё много интересных задач, ценного опыта и классная команда.\n' +
                            'Подавай заявку на настоящую стажировку в '
                        }
                        <Medium>Telegram-канале</Medium>!
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
                        <InputWrapper valid={validMail}>
                            <Input
                                type="email"
                                placeholder="example@post.ru"
                                name="XmnwAc"
                                value={mail}
                                onChange={e => setMail(e.target.value)}
                                onBlur={() => setValidMail(() => !mail.length || checkValidMail())}
                                required
                            />
                        </InputWrapper>
                        <LabelStyled
                            onClick={(e) => {
                                if (e.detail === 1) setAgreement(value => !value);
                            }}
                        >
                            <InputCheckboxStyled
                                type={'radio'}
                                name={'agreement'}
                                onChange={() => {}}
                                checked={agreement}
                            />
                            <RadioIconStyled/>
                            <TextWrapperStyled>
                                <TextStyled>
                                    {'Я согласен на '}
                                    <PersonalDataLink
                                        onClick={(e) => onOpen(e)}
                                    >
                                        обработку персональных данных
                                    </PersonalDataLink>
                                    {'\nи получение информационных сообщений'}
                                </TextStyled>
                            </TextWrapperStyled>
                        </LabelStyled>
                    </Form>
                    <SendBtn
                        animation={animation}
                        onClick={onSend}
                        disabled={!validMail || !agreement || mail.length < 5 || animation }
                    >
                        Отправить
                    </SendBtn>
                    <RectanglePurple/>
                    <RectangleYellow/>
                </TextBlock>
                <ButtonCentered onClick={next}>Подать заявку</ButtonCentered>
            </Wrapper>
        </>
    );
};
