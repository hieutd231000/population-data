import React, { useRef, useState } from 'react';
import { Container, DropdownContainer, Label, LabelContainer, DropdownItem } from './InputCheckboxDropdown.styled';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import useOnClickOutside from '@hooks/useClickOutside';

interface Options {
  value: string | number;
  label: string;
}

interface Props {
  options: Options[];
  placeholder?: string;
}

const InputCheckboxDropdown = ({ placeholder, options }: Props) => {
  const dropdownRef = useRef(null);

  const [values, setValues] = useState<(string | number)[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const onCheckOption = (value: string | number) => {
    const valueExist = values.find((item) => item === value);
    if (valueExist) {
      setValues(values.filter((item) => item !== value));
      return;
    }
    setValues([...values, value]);
  };

  return (
    <Container ref={dropdownRef}>
      <LabelContainer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Label>{placeholder}</Label>
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </LabelContainer>
      {isOpen && (
        <DropdownContainer>
          {options.map((item) => {
            return (
              <DropdownItem key={item.value}>
                <span>{item.label}</span>
                <input
                  onChange={() => {
                    onCheckOption(item.value);
                  }}
                  checked={!!values.find((o) => o === item.value)}
                  type="checkbox"
                />
              </DropdownItem>
            );
          })}
        </DropdownContainer>
      )}
    </Container>
  );
};

export default InputCheckboxDropdown;
