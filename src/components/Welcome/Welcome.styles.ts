import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 20px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
