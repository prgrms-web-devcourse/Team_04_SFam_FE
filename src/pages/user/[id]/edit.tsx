import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { axiosAuthInstance, axiosDefaultInstance } from '@api/axiosInstances';
import { Avatar } from '@components/Avatar';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { Response } from '@interface/response';
import { UserInfo } from '@interface/user';
import { userState } from '@recoil/atoms';
import { BoldB3, ColWrapper, Container, InnerWrapper, RowWrapper } from '@styles/common';

interface EditProfile {
  nickname?: string;
  profileImageUrl?: string | null;
}

const UserEditPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [user] = useRecoilState(userState);
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const [editProfile, setEditProfile] = useState<EditProfile>({
    nickname: user.nickname,
    profileImageUrl: user.profileImageUrl,
  });

  const date = new Date().toTimeString();

  useEffect(() => {
    if (!router.isReady) return;
    (async () => {
      try {
        const {
          data: { data },
        } = await axiosAuthInstance.get<Response<UserInfo>>(`/api/users/${id as string}`);
        setUserInfo(() => data);
        if (data.profileImageUrl) {
          setEditProfile({ ...editProfile, profileImageUrl: `${data.profileImageUrl}?date=${date}` });
        }
      } catch (e) {
        // 에러 처리 필요
      }
    })();
  }, [id, router.isReady]);

  const handleUserFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    const patchUserProfileAPi = async () => {
      try {
        if (!files) {
          alert('파일이 존재하지 않습니다.');
        } else {
          const formData = new FormData();
          formData.append('file', files[0]);

          const res = await axiosAuthInstance.patch('/api/users/profile', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          alert(`${files[0].name} 프로필 이미지가 업로드 되었습니다.`);

          if (editProfile.profileImageUrl) {
            // TODO: 백엔드에게 요청하기 URL 변경하도록
            setEditProfile({ ...editProfile, profileImageUrl: `${editProfile.profileImageUrl}?date=${date}` });
          }

          // TODO: API 수정 이후 확인할 것 res에 이미지 URL 요청드림
          // setEditProfile({ ...editProfile, profileFile: res.data.data.profileImageUrl });
        }
      } catch (error) {
        console.log(error);
      }
    };
    patchUserProfileAPi();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditProfile({ ...editProfile, nickname: value });
  };

  const handleNicknameCheckClick = () => {
    const getNickname = async () => {
      const res = await axiosDefaultInstance.get<Response<boolean>>(
        `/api/users/nickname/duplication?input=${editProfile.nickname as string}`,
      );
      if (res.data.data) {
        alert('이미 사용중인 닉네임입니다.');
      } else {
        alert('사용 가능한 닉네임입니다.');
      }
    };
    if (editProfile.nickname?.length === 0) {
      alert('닉네임을 입력해주세요.');
      return;
    }
    getNickname();
  };

  const handleClick = () => {
    if (editProfile.nickname !== user.nickname) {
      console.log('이름 수정 API 연동');
    }
    router.push(`/user/${id as string}`);
    // TODO: 닉네임 변경 PUT API 연동
  };

  return (
    <Container>
      <InnerWrapper
        margin='20px 0 20px 0'
        alignItems='center'
        justifyContent='center'
      >
        {user && userInfo && editProfile.profileImageUrl ? (
          <Avatar
            imgSrc={`${editProfile.profileImageUrl}?date=${new Date().toTimeString()}`}
            imgSize='100px'
            edit
            user
            handleFileChange={handleUserFileChange}
          />
        ) : (
          <Avatar
            imgSize='100px'
            edit
            user
            handleFileChange={handleUserFileChange}
          />
        )}
      </InnerWrapper>
      <ColWrapper gap='8px'>
        <BoldB3>닉네임(현재 수정 불가)</BoldB3>
        <RowWrapper gap='8px'>
          <Input
            type='text'
            id='changedNickname'
            name='changedNickname'
            value={editProfile.nickname}
            onChange={handleChange}
          />
          <Button
            width='100px'
            fontSize='16px'
            onClick={handleNicknameCheckClick}
          >
            중복 확인
          </Button>
        </RowWrapper>
      </ColWrapper>
      <Button onClick={handleClick}>완료</Button>
    </Container>
  );
};

export default UserEditPage;
