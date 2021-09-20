import styled from '@emotion/styled';
import theme from '@theme';

export const Container = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid ${() => theme.color.border};
  border-radius: ${() => theme.other.borderRadius};
  padding: 5px 10px;
  min-width: 300px;
`;

export const LabelContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
`;

export const DropdownItem = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
`;
