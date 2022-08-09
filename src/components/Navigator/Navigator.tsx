import Link from 'next/link';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { IoNotificationsSharp, IoChatboxSharp, IoHomeSharp, IoPerson } from 'react-icons/io5';
import { useRecoilState } from 'recoil';

import { userState } from '@recoil/atoms';

import * as S from './Navigator.styles';

const Navigator = () => {
  const [user] = useRecoilState(userState);

  const [id, setId] = React.useState<number>();

  React.useEffect(() => {
    setId(user.id);
  }, []);

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
              <span>알림</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href='/team/create'
            passHref
          >
            <S.Anchor>
              <span>
                <FaPlus />
              </span>
              <span>팀 생성</span>
            </S.Anchor>
          </Link>
        </S.NavItem>
        <S.NavItem>
          <Link
            href='/chat'
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
            href={`/user/${id!}`}
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
