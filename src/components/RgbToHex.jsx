function RgbToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? "0" + hexadecimal : hexadecimal;
  }
  
  function ConvertRGBtoHex(red, green, blue) {
    return "#" + RgbToHex(red) + RgbToHex(green) + RgbToHex(blue);
  }

export default ConvertRGBtoHex

