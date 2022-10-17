import '@emotion/react';

interface Color {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  secondary: string;
  secondaryHover: string;
  secondaryActive: string;
  background: string;
  yellow: string;
  gray700: string;
  gray600: string;
  gray500: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;
  green200: string;
  green100: string;
}

declare module '@emotion/react' {
  type ColorType = keyof Color;

  interface Theme {
    color: Color;
    fontSize: {
      h1: string;
      h2: string;
      b1: string;
      b2: string;
      b3: string;
      b4: string;
      c1: string;
      c2: string;
    };
    borderRadius: string;
  }
}
