import React from 'react';
import styled from 'styled-components';
import { CloseIcon } from './svg/CloseIcon';

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 3;
`;

const Background = styled(Wrapper)`
  background: rgb(8, 7, 22);
  opacity: 0.75;
  z-index: 1;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  width: 89vw;
`;

const CloseIconWrapper = styled.div`
  position: absolute;
  top: -31px;
  right: 0;
  width: 32px;
  height: 32px;
  padding: 8px;
`;

const CloseIconStyled = styled(CloseIcon)`
  width: 100%;
  height: 100%;
`;

export const Modal = (props) => {
    return (
        <Wrapper onClick={props.onClick}>
            <Background/>
            <Content className={props.className}>
                {props.close && (
                    <CloseIconWrapper onClick={props.close}>
                        <CloseIconStyled/>
                    </CloseIconWrapper>
                )}
                {props.children}
            </Content>
        </Wrapper>
    )
}