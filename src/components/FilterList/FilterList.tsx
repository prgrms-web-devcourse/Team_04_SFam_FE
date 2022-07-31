import { categoryData } from './dummyData';
import * as S from './FilterList.style';
import { FilterButton } from '..';

const FilterList = () => (
  <S.SportsContainer>
    {categoryData.map((i) => (
      <FilterButton
        size='70px'
        fontSize='10px'
      >
        {i}
      </FilterButton>
    ))}
  </S.SportsContainer>
);
export default FilterList;
