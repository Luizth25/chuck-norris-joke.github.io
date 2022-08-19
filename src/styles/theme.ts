import { DefaultTheme } from "styled-components";

type TFontStyle = {
  fontSize: number;
  fontWeight: number;
};

declare module "styled-components" {
  export interface DefaultTheme {
    colors: { [key in keyof typeof themeColors]: string };
    fontStyles: { [key in keyof typeof themeFontStyles]: TFontStyle };
  }
}

const themeColors = {
  componentColor: "#f1762f",
  borderColor: "#464a4b",
  buttonColor: "#9dafaf",
  backgroud: "#E27919",
};

const themeFontStyles = {
  title: {
    fontSize: 40,
    fontWeight: 500,
  },
};

const theme: DefaultTheme = {
  colors: themeColors,
  fontStyles: themeFontStyles,
};

export default theme;
