import React, { useState, useRef, useCallback, useEffect } from 'react';
import * as S from './Dropdown.style';

interface Props extends S.Props {
  optionsName?: string[];
  optionsValue?: string[];
  placeholder: string;
  onChange?: (value: string | undefined) => void;
}

const Dropdown = ({
  width = '388px',
  height = '50px',
  placeholder = '선택해주세요',
  optionsName = ['옵션을 지정해주세요'],
  optionsValue = [],
  radius = '8px',
  border = true,
  color = 'inherit',
  backgroundColor = '#fff',
  disabled = false,
  onChange,
}: Props) => {
  const replacedOptions =
    optionsName &&
    optionsName.map((item, index) => ({
      id: index,
      content: item,
      value: optionsValue[index],
    }));

  const [selected, setSelected] = useState<string | undefined>(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (onChange && !disabled) {
      onChange(optionsValue[optionsName.indexOf(selected as string)]);
    }
  }, [onChange, optionsName, optionsValue, selected, disabled]);

  const handleOuterClick = useCallback((e: MouseEvent) => {
    if (!(e.target instanceof HTMLElement)) return;
    if (e.target.closest('[data-name=select]') !== selectRef.current) {
      setIsOpen(false);
      document.removeEventListener('click', handleOuterClick);
    }
  }, []);

  const handleSelectClick = () => {
    if (disabled) return;
    if (isOpen) {
      document.removeEventListener('click', handleOuterClick);
    } else {
      document.addEventListener('click', handleOuterClick);
    }
    setIsOpen(!isOpen);
  };

  const handleItemClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLDivElement)) return;
    const { innerText } = e.target;
    setSelected(innerText);
  };

  return (
    <S.Select
      data-name='select'
      ref={selectRef}
      width={width}
      height={height}
      radius={radius}
      border={border}
      color={color}
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={handleSelectClick}
    >
      <S.SelectInner>
        <S.SelectedArea style={{ flex: 1, flexGrow: 1 }}>{selected}</S.SelectedArea>
        <S.IconArea>
          <span className='material-symbols-outlined'>expand_more</span>
        </S.IconArea>
      </S.SelectInner>
      <S.Container isOpen={isOpen}>
        {replacedOptions &&
          replacedOptions.map((item) => (
            <S.Item
              height={height}
              key={item.id}
              data-value={item.value}
              onClick={handleItemClick}
            >
              {item.content}
            </S.Item>
          ))}
      </S.Container>
    </S.Select>
  );
};

export default Dropdown;
