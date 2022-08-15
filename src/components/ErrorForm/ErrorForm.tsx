import { GoSearch } from 'react-icons/go';

import { IconWrapper } from '@components/TeamBadge/TeamBadge.styles';
import { ColWrapper } from '@styles/common';

import * as S from './ErrorForm.styles';

interface Props {
  errorText: string;
  suggestionText?: string;
}

const ErrorForm = ({ errorText, suggestionText }: Props) => (
  <S.Container>
    <ColWrapper
      alignItems='center'
      justifyContent='center'
      gap='16px'
    >
      <IconWrapper>
        <GoSearch size={100} />
      </IconWrapper>
      <S.ErrorText>{errorText}</S.ErrorText>
      <S.SuggestionText>{suggestionText}</S.SuggestionText>
    </ColWrapper>
  </S.Container>
);

export default ErrorForm;
