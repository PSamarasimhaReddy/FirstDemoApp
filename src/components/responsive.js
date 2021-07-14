import { Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const responsiveHeight = (h) => (h/100)*windowHeight;
export const responsiveWidth = (w) =>  (w/100)*windowWidth;
