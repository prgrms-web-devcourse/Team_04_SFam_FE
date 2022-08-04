import React from 'react';
import { MdKeyboardArrowDown } from 'react-icons/md';
import * as S from './Dropdown.styles';

interface DropdownItem {
  id: number;
  text: string;
  value: string;
}

interface Props {
  dropdownItems: DropdownItem[];
  onSelect: (value: string) => void;
}

const Dropdown = ({ dropdownItems, onSelect }: Props) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleClickToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLLIElement;
    setIsOpen((prev) => !prev);
    setSelectedItem(() => target.innerText);
    if (onSelect) onSelect(target.dataset.value || '');
  };

  const handleClickOutSide = React.useCallback(
    (e: MouseEvent) => {
      if (isOpen && !ref.current?.contains(e.target as HTMLElement)) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutSide);
    return () => {
      document.removeEventListener('click', handleClickOutSide);
    };
  }, [ref, handleClickOutSide]);

  return (
    <S.Wrapper
      ref={ref}
      width='100%'
      height='33.5px'
      border
      radius='8px'
    >
      <S.SelectInner onClick={handleClickToggle}>
        {selectedItem ? (
          <S.IconArea>
            <S.SelectedArea>{selectedItem}</S.SelectedArea>
            <MdKeyboardArrowDown size={20} />
          </S.IconArea>
        ) : (
          <S.IconArea>
            <S.SelectedArea>활동 종목을 선택해주세요.</S.SelectedArea>
            <MdKeyboardArrowDown size={20} />
          </S.IconArea>
        )}
      </S.SelectInner>
      {isOpen ? (
        <S.Container isOpen={isOpen}>
          {dropdownItems.map((dropdownItem) => (
            <S.Item
              key={dropdownItem.id}
              data-value={dropdownItem.value}
              onClick={handleClickSelect}
              height='40px'
            >
              {dropdownItem.text}
            </S.Item>
          ))}
        </S.Container>
      ) : (
        <div />
      )}
    </S.Wrapper>
  );
};

export default Dropdown;
