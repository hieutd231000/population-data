export interface AppTheme {
  color: {
    primary: string;
    text: string;
    border: string;
  };
  size: {
    h1: string;
  };
  other: {
    borderRadius: string;
  };
}

export const theme: AppTheme = {
  color: {
    primary: '#000',
    text: '#333',
    border: '#dedede',
  },
  size: {
    h1: '30px',
  },
  other: {
    borderRadius: '5px',
  },
};

export default theme;
