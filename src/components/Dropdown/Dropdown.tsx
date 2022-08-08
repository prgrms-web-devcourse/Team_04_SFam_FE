import React from 'react';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import * as S from './Dropdown.styles';
import { Item } from './types';

interface Props<T> {
  items: Item<T>[];
  placeholder?: string;
  onSelect: (item: Item<T>) => void;
  round?: boolean;
  disabled?: boolean;
}

export const Dropdown = <T,>({ items, placeholder, onSelect, round, disabled }: Props<T>) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = React.useState(false);
  const [text, setText] = React.useState('');

  const handleClickToggle = () => {
    if (disabled) return;
    setIsOpen((prev) => !prev);
  };

  const handleClickSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLLIElement;
    setIsOpen((prev) => !prev);
    setText(() => target.innerText);
    if (onSelect) onSelect(items[+target.dataset.id!]);
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
    <S.Wrapper ref={ref}>
      {round ? (
        <S.RoundSelectedItem onClick={handleClickToggle}>
          {text ? <S.TextWhite>{text}</S.TextWhite> : <S.TextWhite>{placeholder}</S.TextWhite>}
          {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </S.RoundSelectedItem>
      ) : (
        <S.SelectedItem onClick={handleClickToggle}>
          {text ? <S.Text>{text}</S.Text> : <S.TextGray>{placeholder}</S.TextGray>}
          {isOpen ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
        </S.SelectedItem>
      )}
      {isOpen ? (
        <S.List>
          {items.map((item) => (
            <S.ListItem
              key={item.id}
              data-id={item.id}
              onClick={handleClickSelect}
            >
              {item.text}
            </S.ListItem>
          ))}
        </S.List>
      ) : (
        <div />
      )}
    </S.Wrapper>
  );
};
