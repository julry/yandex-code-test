import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import QRCodeStyling from 'qr-code-styling';
import { colors } from '../../constants/colors';
import { BoldText } from './styledTexts';
import { Background, BackgroundWrapper, ContentWrapper } from './wrappers';
import { Modal } from './Modal';
// import { DoneMark } from './svg/DoneMark';

const ContentWrapperStyled = styled(ContentWrapper)`
  margin: 0;
  max-width: none;
  white-space: pre-line;
  display: flex;
  flex-direction: column;
  filter: blur(${({isModal}) => isModal ? '4px' : '0'});
`;

const Wrapper = styled.div`
  position: relative;
  justify-content: space-between;
  padding: 6.9vh 70px 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  @media screen and (max-width: 900px) {
    padding: 6vh 50px 0;
  }
`;

const Title = styled(BoldText)`
  font-size: 40px;
  line-height: 49px;
  color: white;

  @media screen and (max-width: 900px) {
    font-size: 36px;
  }
`;

const TextWrapper = styled.div`
  font-size: 24px;
  margin-left: 25px;
  
  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

const QrWrapper = styled.div`
  margin: auto 0 9.16667vh -85px;
  background: white;
  padding: 10px 0 10px 80px;
  //border: 2px solid ${colors.purple};
  border-left: none;
  border-radius: 13px;
  transform: matrix(1,0,-0.05,1,0,0);
  width: 580px;
  
  @media screen and (max-height: 690px) {
    margin-bottom: 5.16667vh;
  }

  @media screen and (max-height: 660px) {
    margin-bottom: 2.16667vh;
  }

  @media screen and (max-width: 900px) {
    margin-left: -65px;
    padding-left: 60px;
    width: 535px;
  }
`;

const QrContent = styled.div`
  display: flex;
  align-items: center;
  transform: matrix(1,0,0.05,1,0,0);
`;

const ImageWrapper = styled.div`
  position: absolute;
  left: 508px;
  bottom: 0;
  height: 80.5vh;
  align-items: flex-end;
  overflow: hidden;
  width: calc(100vw - 508px);

  @media screen and (max-width: 900px) {
    left: 380px;
    width: calc(100vw - 380px);
  }
`;

const Image = styled.img`
  height: 100%;
  object-fit: contain;
`;

const CopyBtn = styled.span`
  cursor: pointer;
  border-bottom: 2px solid black;
`;

// const LogoDesktopStyled = styled(LogoDesktop)`
//   width: 215px;
//   height: 120px;
//   margin-bottom: 8.611vh;
//   margin-left: -3px;
//
//   @media screen and (max-width: 900px) {
//     width: 180px;
//     height: 100px;
//     margin-bottom: 5.611vh;
//   }
// `;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 20px;
`;
//
// const DoneMarkStyled = styled(DoneMark)`
//   height: 116px;
//   width: 116px;
//   margin-bottom: 24px;
// `;

const BottomBlock = styled.div`
  position: absolute;
  bottom: 0;
  left: 525px;
  background: ${colors.purple};
  font-size: 32px;
  width: calc(100vw - 605px);
  max-width: 535px;
  padding: 21px 0;
  min-width: 295px;
  text-align: center;
  color: white;
  border-radius: 45px 45px 0 0;
  font-weight: bold;

  @media screen and (max-width: 900px) {
    left: 470px;
    width: calc(100vw - 525px);
    border-radius: 30px 30px 0 0;
  }
`;

const BackgroundWrapperStyled = styled(BackgroundWrapper)`
  filter: blur(${({isModal}) => isModal ? '4px' : '0'});
`;

const ModalStyled = styled(Modal)`
    padding: 32px 50px;
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
                width: 220,
                height: 220,
                type: "svg",
                backgroundOptions: {
                    color: "transparent",
                },
                dotsOptions: {
                    type: 'rounded',
                },
                cornersSquareOptions: {
                    type: 'extra-rounded',
                },
                cornersDotOptions: {
                    type: 'extra-rounded',
                },
                imageOptions: {
                    margin: 5,
                    imageSize: 0.5
                },
                data: window.location.href
            });
            qrCode.append(ref.current);
            // const defs = ref.current?.getElementsByTagName('defs')[0];
            // defs.innerHTML += '<linearGradient id="paint0_linear_503_3" x1="0" y1="220" x2="220" y2="0" gradientUnits="userSpaceOnUse">' +
            //     '            <stop stop-color="#5F308C"/>' +
            //     '            <stop offset="1" stop-color="#F37022"/>' +
            //     '        </linearGradient>';
            // const rects = ref.current?.getElementsByTagName('rect');
            // rects[rects.length-1].setAttribute('fill', "url(#paint0_linear_503_3)");
        }
    }, []);

    return (
        <Wrapper>
            <BackgroundWrapperStyled isModal={isModal}>
                {/*<Background src={bgDesktop} alt={''} />*/}
                {/*<ImageWrapper>*/}
                {/*        <Image src={desktopPeople} alt={''} />*/}
                {/*</ImageWrapper>*/}
            </BackgroundWrapperStyled>
            <ContentWrapperStyled isModal={isModal}>
                {/*<Title>{'Вот-вот наступит твой\nпервый рабочий день\nв Axenix.'}</Title>*/}
                <QrWrapper>
                    <QrContent>
                        <div ref={ref} />
                        <TextWrapper>
                            {'Сканируй QR-код\nили копируй '} <CopyBtn onClick={onCopyButtonClick}>ссылку</CopyBtn>
                        </TextWrapper>
                    </QrContent>
                </QrWrapper>
            </ContentWrapperStyled>
            {/*{isModal && (*/}
            {/*    <ModalStyled>*/}
            {/*        <ModalContent>*/}
            {/*            <DoneMarkStyled />*/}
            {/*            <p>Ссылка скопирована</p>*/}
            {/*        </ModalContent>*/}
            {/*    </ModalStyled>*/}
            {/*)}*/}
        </Wrapper>
    );
};
