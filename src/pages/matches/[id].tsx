import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { PostDetail } from '@components/PostDetail';

const Detail: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return <PostDetail />;
};

export default Detail;
