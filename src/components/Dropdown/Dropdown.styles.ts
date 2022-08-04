import styled from '@emotion/styled';

export interface Props {
  width?: string;
  height?: string;
  isOpen?: boolean;
  radius?: string;
  border?: boolean;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
}

export const Wrapper = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border: ${({ border, theme }) => (border ? `1px solid ${theme.color.gray300}` : 'none')};
  border-radius: ${({ radius }) => radius};
  padding: 0 8px;
  color: ${({ color, theme, disabled }) => (disabled ? `${theme.color.gray300}` : color)};
  background-color: ${({ backgroundColor, theme, disabled }) =>
    disabled ? `${theme.color.gray300}` : backgroundColor};
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
  font-size: ${(props) => props.theme.fontSize.b4};
`;

export const IconArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Container = styled.div<Props>`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  top: 100%;
  left: 0;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.gray300};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: #000;
  background-color: ${({ theme }) => theme.color.background};
  overflow: hidden;
  z-index: 10;
`;

export const Item = styled.div<Props>`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${({ height }) => height};
  border-radius: 1px solid ${({ theme }) => theme.borderRadius};
  padding-left: 1rem;
  background-color: ${({ theme }) => theme.color.background};
  border-bottom: ${(props) => props.theme.color.gray300};
  &:active {
    background-color: ${({ theme }) => theme.color.gray200};
  }
`;
