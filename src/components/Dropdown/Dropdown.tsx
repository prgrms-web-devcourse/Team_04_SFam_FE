import styled from '@emotion/styled';
import React from 'react';

interface DropdownItem {
  id: number;
  text: string;
  value: string;
}

interface Props {
  dropdownItems: DropdownItem[];
  onSelect: (value: string) => void;
}

const Div = styled.div``;
const Li = styled.li``;

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
    <div ref={ref}>
      <Div onClick={handleClickToggle}>{selectedItem ? <div>{selectedItem}</div> : <div>선택해주세요.</div>}</Div>
      {isOpen ? (
        <ul>
          {dropdownItems.map((dropdownItem) => (
            <Li
              key={dropdownItem.id}
              data-value={dropdownItem.value}
              onClick={handleClickSelect}
            >
              {dropdownItem.text}
            </Li>
          ))}
        </ul>
      ) : (
        <div />
      )}
    </div>
  );
};

export default Dropdown;
