import useGeolocation from 'react-hook-geolocation';
import { Address, kakaoMapApi } from '@api/kakaoMapApi';
import { Button } from '@components/Button';
import { Slider } from '@components/Slider';
import { B2, B3, BoldB2, ColWrapper, Container, GrayB2, InnerWrapper } from '@styles/common';
import { NextPage } from 'next/types';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { userState } from '@recoil/atoms';
import { useRecoilState } from 'recoil';
import { axiosAuthInstance } from '@api/axiosInstances';

const LocationSetting: NextPage = () => {
  const [loginUser, setLoginUser] = useRecoilState(userState);
  const [distance, setDistance] = useState(5);
  const [kakaoLoading, setKakaoLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<Address>({
    address_name: '',
    region_1depth_name: '',
    region_2depth_name: '',
    region_3depth_name: '',
    mountain_yn: '',
    main_address_no: '',
    sub_address_no: '',
  });
  const router = useRouter();
  const geolocation = useGeolocation({});

  useEffect(() => {
    setKakaoLoading(true);
    async function fetchAddress() {
      if (geolocation.latitude && geolocation.longitude) {
        await kakaoMapApi(geolocation.latitude, geolocation.longitude, setAddress);
        setKakaoLoading(false);
      }
    }
    fetchAddress();
  }, [geolocation.latitude, geolocation.longitude]);

  const handleClick = () => {
    setLoginUser({ ...loginUser, distance });
    axiosAuthInstance({
      method: 'PUT',
      url: '/api/users/location',
      data: {
        latitude: geolocation.latitude,
        longitude: geolocation.longitude,
      },
    }).then((res) => {
      if (res.status === 200) {
        router.push('/matches');
      } else {
        alert('설정이 완료되지 않았습니다.');
      }
    });
  };

  return (
    <Container>
      <ColWrapper padding='40px 0'>
        <B3>현재 위치를 기준으로 내 동네가 설정됩니다.</B3>
        <InnerWrapper>
          <GrayB2>현 위치</GrayB2>
          {kakaoLoading ? (
            <BoldB2>설정 중...</BoldB2>
          ) : (
            <BoldB2>
              {address.region_1depth_name} {address.region_2depth_name} {address.region_3depth_name}
            </BoldB2>
          )}
        </InnerWrapper>
        <ColWrapper padding='20px 0'>
          <B2>현 위치를 기준으로</B2>
          <B2>매칭 가능한 거리를 설정해주세요</B2>
        </ColWrapper>
        <Slider setDistance={setDistance} />
        <InnerWrapper>
          <Button onClick={handleClick}>설정 완료</Button>
        </InnerWrapper>
      </ColWrapper>
    </Container>
  );
};

export default LocationSetting;
