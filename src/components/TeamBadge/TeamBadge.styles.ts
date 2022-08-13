import styled from '@emotion/styled';

export const BadgeInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  padding-right: 4px;
`;

export const BadgeText = styled.span`
  font-size: ${(props) => props.theme.fontSize.b3};
`;
