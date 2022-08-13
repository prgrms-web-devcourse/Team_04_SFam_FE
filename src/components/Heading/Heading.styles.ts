import styled from '@emotion/styled';

export const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  height: 64px;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.color.background};
  border-bottom: 1px solid ${(props) => props.theme.color.gray200};
  z-index: 1;
`;

interface Props {
  pointer?: boolean;
}

export const HeadingTitle = styled.h1<Props>`
  font-size: ${(props) => props.theme.fontSize.b1};
  font-weight: bold;
  cursor: ${(props) => props.pointer && 'pointer'};
`;

export const HeadingLinkContainer = styled.div`
  display: flex;
  gap: 4px;
  font-size: ${({ theme }) => theme.fontSize.b3};
`;
