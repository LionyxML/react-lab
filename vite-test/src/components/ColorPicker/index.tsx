import React from "react";
import { SketchPicker } from "react-color";


interface ColorPickerPropsType {
    color: any,
    onChange: any
}


const ColorPicker: React.FC<ColorPickerPropsType>= ({ color, onChange }) => {
  return <SketchPicker color={color} onChange={onChange} />;
};

export default ColorPicker;
