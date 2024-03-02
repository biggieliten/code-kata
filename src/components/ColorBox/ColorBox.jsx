import { useState } from "react";
import NewColor from "./NewColor/NewColor";

// const NewColor = () => {};

const ColorBox = ({ colorList }) => {
  const [newColor, setNewColor] = useState(colorList);

  const addColor = (addedColor) => {
    // setNewColor(colorList);
    setNewColor([...newColor, addedColor]);
    console.log("newColor", newColor);
    console.log(addedColor);
    console.log(colorList);
  };

  return (
    <>
      {/* <button></button> */}

      <div>
        {newColor.map((color) => {
          return (
            <div
              style={{
                backgroundColor: color,
                height: "10rem",
                width: "10rem",
              }}
            >
              hola amigo
            </div>
          );
        })}
      </div>
      <NewColor addColor={addColor} />
    </>
  );
};

export default ColorBox;
