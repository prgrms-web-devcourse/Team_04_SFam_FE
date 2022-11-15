import React from 'react';

import Link from 'next/link';
import { FaPen } from 'react-icons/fa';
import { IoNotificationsSharp, IoChatboxSharp, IoHomeSharp, IoPerson } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

import { userState } from '@recoil/atoms';

import * as S from './Navigator.styles';

const Navigator = () => {
  const [user] = useRecoilState(userState);

  const [id, setId] = React.useState<number>();

  React.useEffect(() => {
    setId(user.id);
  }, [user.id]);

  return (
    <S.Container>
      <S.Nav>
        <S.NavItem>
          <Link
            href='/matches'
            passHref
          >
            <S.Anchor>
              <span>
                <IoHomeSharp />
              </span>
              <span>홈</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href='/notification'
            passHref
          >
            <S.Anchor>
              <span>
                <IoNotificationsSharp />
              </span>
              <span>초대 알림</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href='/matches/create'
            passHref
          >
            <S.Anchor>
              <span>
                <FaPen />
              </span>
              <span>글쓰기</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href='/chatlist'
            passHref
          >
            <S.Anchor>
              <span>
                <IoChatboxSharp />
              </span>
              <span>채팅</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href={`/user/${id as number}`}
            passHref
          >
            <S.Anchor>
              <span>
                <IoPerson />
              </span>
              <span>내 정보</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
      </S.Nav>
    </S.Container>
  );
};

export default Navigator;
