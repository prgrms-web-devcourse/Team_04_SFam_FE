import { dummyData } from './dummyData';
import * as S from './FilterList.style';

const FilterList = () => {
  <>
    <S.SportsContainer>
      {/* {categoryData.map((i) => (
        // <FilterButton
        //   size='70px'
        //   fontSize='10px'
        // >
        //   {i}
        // </FilterButton>
      ))} */}
    </S.SportsContainer>
    ;
    {dummyData.map(({ data }) => (
      <div>{data.id}</div>
    ))}
  </>;
};
export default FilterList;
