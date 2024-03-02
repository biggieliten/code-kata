import { useState } from "react";

const NewColor = ({ addColor }) => {
  const [newColor, setColor] = useState("");

  const handleChange = (e) => {
    // e.preventDefault();
    setColor(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(newColor);

    setColor("");
    // setSubmit(handleChange);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newColor} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewColor;
