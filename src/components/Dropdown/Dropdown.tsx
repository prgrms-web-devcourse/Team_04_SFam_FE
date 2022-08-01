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
  const [isOpen, setIsOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState('');

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelect = (e: React.MouseEvent) => {
    const target = e.target as HTMLLIElement;
    setIsOpen((prev) => !prev);
    setSelectedItem(() => target.innerText);
    if (onSelect) onSelect(target.dataset.value || '');
  };

  return (
    <div>
      <Div onClick={handleToggle}>{selectedItem ? <div>{selectedItem}</div> : <div>선택해주세요.</div>}</Div>
      {isOpen ? (
        <ul>
          {dropdownItems.map((dropdownItem) => (
            <Li
              key={dropdownItem.id}
              data-value={dropdownItem.value}
              onClick={handleSelect}
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
