import styled from '@emotion/styled';

interface Props {
  width?: string;
  height?: string;
  isOpen?: boolean;
  radius?: string;
  border?: boolean;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export const Select = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border }) => (border ? '1px solid #cdcdcd' : 'none')};
  border-radius: ${({ radius }) => radius};
  padding: 0 1rem;
  color: ${({ color, disabled }) => (disabled ? '#555' : color)};
  background-color: ${({ backgroundColor, disabled }) => (disabled ? '#cdcdcd' : backgroundColor)};
  box-sizing: border-box;
`;

export const SelectInner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  top: 0;
  left: 0;
`;

export const SelectedArea = styled.div`
  flex: 1;
  flex-grow: 1;
`;

export const IconArea = styled.div`
  width: fit-content;
`;

export const Container = styled.div<Props>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 8px;
  color: #000;
  background-color: #fff;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 10;
`;

export const Item = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 8px;
  padding-left: 1rem;
  background-color: #fff;
  box-sizing: border-box;
  &:active {
    background-color: #d9d9d9;
  }
`;
