import { FilterButton } from '@components/FilterButton';
import { categoryData } from './dummyData';
import * as S from './FilterList.style';

const FilterList = () => (
  <S.Container>
    {categoryData.map((i) => (
      <FilterButton
        size='70px'
        fontSize='10px'
        margin='10px'
      >
        {i}
      </FilterButton>
    ))}
  </S.Container>
);
export default FilterList;
