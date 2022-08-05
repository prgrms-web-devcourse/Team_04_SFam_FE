import { axiosAuthInstance } from '@api/axiosInstances';
import { atom, selector } from 'recoil';

export const matchesState = atom({
  key: 'matchesCategory',
  default: '',
});

export const getCategoricalMatches = selector({
  key: 'get/categorical-matches',
  get: async ({ get }) => {
    const category = get(matchesState);
    console.log(category);
    if (category === '') {
      try {
        const res = await axiosAuthInstance.get('/api/matches', {
          params: {
            size: 10,
            status: 'WAITING',
            distance: 30,
          },
        });
        return (res.data as { data: object }).data;
      } catch (err) {
        throw new Error(`${err as string}`);
      }
    }
    try {
      const res = await axiosAuthInstance.get('/api/matches', {
        params: {
          size: 10,
          category,
          status: 'WAITING',
          distance: 30,
          validCursor: true,
        },
      });
      return (res.data as { data: object }).data;
    } catch (err) {
      throw new Error(`${err as string}`);
    }
  },
  cachePolicy_UNSTABLE: {
    eviction: 'most-recent',
  },
});
