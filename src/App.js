import React, { useEffect, useRef, useState } from 'react';
import styled from "styled-components";
import { isMobile } from 'react-device-detect';
import { preloadImage } from "./utils/preloadImage";
import { ProgressProvider } from './context/ProgressContext';
import { useProgressInit } from './hooks/useProgressInit';
import { Title } from './components/shared/styledTexts';
import { Orientation } from './components/shared/svg/Orientation';
import { InfoQr } from './components/shared/InfoQr';
import { colors } from './constants/colors';

const Wrapper = styled.div`
  ${({ styles }) => styles};
  background-size: cover;
  position: relative;
  overflow-x: hidden;
`;

const ComponentWrapper = styled.div`
  position: relative;
  overflow: auto;
  height: 100%;
  width: 100%;
  white-space: pre-line;
`;

const MobileViewLandscaped = styled.div`
  display: none;

  @media screen and (orientation: landscape) and (min-width: 400px) {
    display: block;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 10000;
    width: 100%;
    height: 100%;
  }
`;

const InfoScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: #080716;
  color: ${colors.textGray};
  position: relative;
  z-index: 3000;
  flex-direction: ${({direction}) => direction};
  justify-content: center;
  align-items: center;
`;

const OrientationIcon = styled(Orientation)`
  width: 15vh;
  height: 15vh;
  margin-right: 20px;
`;

export function App() {
  const [height, setHeight] = useState('100vh');
  const progress = useProgressInit();
  const { screen, updateProgress } = progress;

  const Component = screen?.component || (() => null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    updateProgress('wrapperRef', wrapperRef);
  }, []);

  useEffect(() => {
    const preloadImages = screen?.preloadImages;
    const clears = preloadImages && preloadImages.map(img => preloadImage(img));
    return () => clears && clears.forEach(clear => clear());
  }, [screen]);


  useEffect(() => {
    function handleResize() {
      const viewportHeight = document.documentElement.clientHeight;
      setHeight(viewportHeight + 'px');
    }
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <ProgressProvider value={progress}>
        <Wrapper styles={{ height }}>
          {!isMobile ? (
              <InfoScreen direction={'column'}>
                <InfoQr/>
              </InfoScreen>
          ) : (
              <>
                <ComponentWrapper ref={wrapperRef}>
                  <Component />
                </ComponentWrapper>
                <MobileViewLandscaped>
                  <InfoScreen direction={'row'}>
                    <OrientationIcon/>
                    <Title>Пожалуйста, переверни устройство :)</Title>
                  </InfoScreen>
                </MobileViewLandscaped>
              </>
          )}
        </Wrapper>
      </ProgressProvider>
  );
}
