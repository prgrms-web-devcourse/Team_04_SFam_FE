import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 20px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  padding-top: 80px;
  width: 100%;
`;

export const Title = styled.span`
  font-size: ${(props) => props.theme.fontSize.h1};
  font-weight: bold;
  line-height: 2.5;
`;

export const Paragraph = styled.span`
  font-size: ${(props) => props.theme.fontSize.b2};
  line-height: 1.5;
  text-align: center;
`;
