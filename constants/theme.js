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
bg:"#FFF5E0",
cardbg:"#1F2937",
second:"#FF2171",
secondtwo:"#FFD0D0",
secondthree:"#FF2171",
white:"#FFF",
black:"#000",
gray:"#ddd",
darkblue:"#190933",
babypink:"#EE9E8E",
light:"#FFDBC3",
};


export const FONTS={
 bold:"InterBold",
 semiBold:"InterSemiBold",
 medium:"InterMedium",
 regular:"InterReqular",
 light:"InterLight",
 italic:"InterItalic",
 

};

