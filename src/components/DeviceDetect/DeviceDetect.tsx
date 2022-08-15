import styled from '@emotion/styled';
import React from 'react';
import { isMobile } from 'react-device-detect';

const MobileView = styled('div')({
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  top: 0,
  left: 0,
});

const OtherView = styled('div')(
  {
    width: 390,
    height: 844,
    position: 'relative',
  },
  ({ theme }) => ({
    border: `1px solid ${theme.color.gray200}`,
  }),
);

interface Props {
  children: React.ReactNode;
}

const DeviceDetect = ({ children }: Props) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;
  return isMobile ? <MobileView>{children}</MobileView> : <OtherView>{children}</OtherView>;
};

export default DeviceDetect;
