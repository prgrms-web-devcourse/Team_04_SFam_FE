import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 16px 24px;
`;

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.span`
  font-size: 28px;
`;

export const DetailItem = styled.span`
  font-size: 16px;
  font-weight: bold;
`;

export const DetailTitle = styled.span`
  font-size: 16px;
`;

export const Message = styled.div`
  text-align: center;
  color: ${(props) => props.theme.color.gray400};
`;

export const StatusWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
