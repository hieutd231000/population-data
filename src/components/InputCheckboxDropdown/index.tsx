import React, { useRef, useState, useEffect } from 'react';
import { Container, DropdownContainer, Label, LabelContainer, DropdownItem, DropdownItemLabel } from './InputCheckboxDropdown.styled';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import useOnClickOutside from '@hooks/useClickOutside';

interface Options {
  value: string | number;
  label: string;
}

interface Props {
  options: Options[];
  placeholder?: string;
  onChange?: (value: string | number | string | (string | number)[] | null) => void;
  multiChoose?: boolean;
}

const InputCheckboxDropdown = ({ placeholder, multiChoose, options, onChange }: Props) => {
  const dropdownRef = useRef(null);

  const [singleValue, setSingleValue] = useState<string | number | null>(null);
  const [values, setValues] = useState<(string | number)[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useOnClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const onCheckOption = (value: string | number) => {
    if (multiChoose && values) {
      const valueExist = values.find((item) => item === value);
      if (valueExist) {
        setValues(values.filter((item) => item !== value));
        return;
      }
      setValues([...values, value]);
      setIsOpen(false);
      return;
    }

    singleValue && singleValue === value ? setSingleValue(null) : setSingleValue(value);
    setIsOpen(false);
  };

  useEffect(() => {
    if (multiChoose) {
      onChange?.(values);
    }
  }, [values]);

  useEffect(() => {
    if (!multiChoose) {
      onChange?.(singleValue);
    }
  }, [singleValue]);

  return (
    <Container ref={dropdownRef}>
      <LabelContainer
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Label>{multiChoose ? placeholder : options.find((item) => item.value === singleValue)?.label || placeholder}</Label>
        {isOpen ? <AiOutlineCaretUp /> : <AiOutlineCaretDown />}
      </LabelContainer>
      {isOpen && (
        <DropdownContainer>
          {options.map((item) => {
            return (
              <DropdownItem
                multiChoose={multiChoose}
                key={item.value}
                onClick={() => {
                  onCheckOption(item.value);
                }}
                active={!multiChoose && singleValue === item.value}
              >
                <DropdownItemLabel active={!multiChoose && singleValue === item.value}>{item.label}</DropdownItemLabel>
                {multiChoose && (
                  <input
                    onChange={() => {
                      onCheckOption(item.value);
                    }}
                    checked={!!values.find((o) => o === item.value)}
                    type="checkbox"
                  />
                )}
              </DropdownItem>
            );
          })}
        </DropdownContainer>
      )}
    </Container>
  );
};

export default InputCheckboxDropdown;
