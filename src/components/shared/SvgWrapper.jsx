import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  z-index: -1;
  background-size: cover !important;
  background-repeat: no-repeat !important;
  user-select: none;
  pointer-events: none;
`;

export const SvgWrapper = (props) => {
    return <Wrapper {...props} />
}