import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { colors } from '../../constants/colors';
import { MediumText, RegularText } from './styledTexts';
import { Modal } from './Modal';
import desktopPic from './svg/desktopPic.svg';
import { BorderBlock } from './BorderBlock';
import { DoneMark } from './svg/DoneMark';
import { SvgWrapper } from './SvgWrapper';
import modalRectangles from './svg/rectangles/modalDesktop.svg'
import { DesktopTop } from './svg/rectangles/DesktopTop';
import { DesktopBottom } from './svg/rectangles/DesktopBottom';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  padding: 2.9vh 3.5vw 2.9vh 5.5729vw;
  height: 100%;
  overflow: hidden;
  white-space: pre;
  filter: blur(${({isModal}) => isModal ? '5px' : '0'});
`;

const Title = styled(MediumText)`
  font-size: 55px;
  line-height: 62px;
  color: white;
  letter-spacing: -0.01em;
  margin-bottom: min(85px, 7.87vh);
  text-align: center;

  @media screen and (max-height: 800px) {
    font-size: 45px;
  }
`;

const QrWrapper = styled(BorderBlock)`
  position: absolute;
  right: 3.5vw;
  top: calc((100vh - 750px) / 3);
  padding: min(76px, 7.03vh) 36px  min(98px, 9.074vh);
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media screen and (max-height: 800px) {
    top: calc((100vh - 550px) / 3);
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  align-items: flex-end;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    left: 380px;
    width: calc(100vw - 380px);
  }
`;

const Text = styled(RegularText)`
  font-size: 30px;
  text-align: center;
  margin-top: 15px;
  @media screen and (max-height: 800px) {
    font-size: 25px;
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const CopyBtn = styled.span`
  cursor: pointer;
  border-bottom: 2px solid ${colors.textGray};
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  height: 340px;
  justify-content: center;
  border-radius: 5px;
`;

const ModalText = styled.p`
  font-size: 30px;
  color: #070717;
  text-align: center;
`;

const DoneMarkStyled = styled(DoneMark)`
  height: 186px;
  width: 186px;
  margin-bottom: 32px;
`;

const ModalStyled = styled(Modal)`
  width: 500px;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${modalRectangles});
  width: 742px;
  height: 455px;
  top: -30px;
  left: -112px;
`;

const TopRectangle = styled(DesktopTop)`
  position: absolute;
  z-index: -5;
  width: 38.85vw;
  height: 35.88vw;
  top: -8.9vw;
  left: -7.29vw;
`;

const BottomRectangle = styled(DesktopBottom)`
  position: absolute;
  z-index: -5;
  width: 18.23vw;
  height: 22.5vw;
  bottom: -7.03vw;
  right: -2.6vw;
`;

const onLinkCopy = () => {
    const text = window.location.href?.split('?')[0];
    if (window.clipboardData && window.clipboardData.setData) {
        return window.clipboardData.setData('Text', text);
    } else if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else if (document.queryCommandSupported && document.queryCommandSupported('copy')) {
        const isOS = () => navigator.userAgent.match(/ipad|iphone/i);
        const textarea = document.createElement('textarea');
        textarea.textContent = text;
        textarea.style.position = 'fixed';
        textarea.disabled = true;
        document.body.appendChild(textarea);
        if (isOS()) {
            const range = document.createRange();
            range.selectNodeContents(textarea);
            const selection = window.getSelection();
            selection.removeAllRanges();
            selection.addRange(range);
            textarea.setSelectionRange(0, 999999);
        } else {
            textarea.select();
        }
        try {
            return document.execCommand('copy');
        } catch (ex) {
            console.warn('Copy to clipboard failed.', ex);
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

export const InfoQr = () => {
    const ref = useRef();
    const [isModal, setIsModal] = useState(false);

    const onCopyButtonClick = () => {
        onLinkCopy();
        setIsModal(true);
        setTimeout(() => setIsModal(false), 3500);
    };

    useEffect(() => {
        if (!ref?.current?.children.length) {
            const qrCode = new QRCodeStyling({
                width: 250,
                height: 250,
                type: "svg",
                backgroundOptions: {
                    color: "transparent",
                },
                dotsOptions: {
                    color: 'white',
                },
                cornersSquareOptions: {
                    color: 'white',
                },
                cornersDotOptions: {
                    color: 'white',
                },
                data: window.location.href
            });
            qrCode.append(ref.current);
        }
    }, []);

    return (
        <>
            <Wrapper isModal={isModal}>
                <ImageWrapper>
                    <Image src={desktopPic} alt={''}/>
                </ImageWrapper>
                <QrWrapper>
                    <Title>
                        {'Заходи в игру с телефона,\nробот-стажёр уже ждёт тебя!'}
                    </Title>
                    <div ref={ref} />
                    <Text>
                        {'Сканируй QR-код выше \nили копируй себе '}<CopyBtn onClick={onCopyButtonClick}>ссылку</CopyBtn>
                    </Text>
                    <TopRectangle/>
                    <BottomRectangle/>
                </QrWrapper>
            </Wrapper>
            {isModal && (
                <ModalStyled>
                    <ModalContent>
                        <DoneMarkStyled />
                        <ModalText>Ссылка скопирована</ModalText>
                    </ModalContent>
                    <Rectangles/>
                </ModalStyled>
            )}
        </>
    );
};
