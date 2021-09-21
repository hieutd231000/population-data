import styled from '@emotion/styled';
import theme from '@theme';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid ${() => theme.color.border};
  border-radius: ${() => theme.other.borderRadius};
  padding: 5px 10px;
  min-width: 250px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;

export const Label = styled.span`
  position: relative;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  left: 0;
  top: 100%;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  border-radius: 0 0 ${() => `${theme.other.borderRadius} ${theme.other.borderRadius}`};
  box-shadow: 0px 3px 4px 0px #0000002e;
  z-index: 10;
  background-color: #fff;
`;

export const DropdownItem = styled.div<{ active?: boolean; multiChoose?: boolean }>`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  background-color: ${({ active, multiChoose }) => !!active && !multiChoose && theme.color.border};
  cursor: ${({ multiChoose }) => !multiChoose && 'pointer'};
  &:hover {
    background-color: ${() => theme.color.border};
  }
`;

export const DropdownItemLabel = styled.span<{ active?: boolean }>`
  display: ${({ active }) => !!active && 'block'};
`;
