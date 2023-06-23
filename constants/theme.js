import { PixelRatio } from "react-native";
//to set size based on phone screen size
const fontScale=PixelRatio.getFontScale();
export const SIZES = {

  small: 9 * fontScale,
  medium: 14 * fontScale,
  large: 18 * fontScale,
  xlarge: 24 * fontScale,

};

export const COLORS={
bg:"#111827",
cardbg:"#1F2937",
second:"#2D4356",
secondtwo:"#001C30",
secondthree:"#FF2171",
white:"#FFF",
black:"#000",
gray:"#ddd",
};


export const FONTS={
 bold:"InterBold",
 semiBold:"InterSemiBold",
 medium:"InterMedium",
 regular:"InterReqular",
 light:"InterLight",
 italic:"InterItalic",
 

};

