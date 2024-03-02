import { useState } from "react";

const ToDo = () => {
  const [input, setInput] = useState([]);
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
    // console.log(input);
  };
  const handleInput = () => {
    setInput([...input, text]);
    console.log(text, input);
  };

  return (
    <>
      <textarea
        onChange={handleTextChange}
        value={text}
        name=""
        id=""
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={handleInput}>Add</button>
      <ul>
        {input.map((text, i) => {
          return <li key={i}>{text}</li>;
        })}
      </ul>
    </>
  );
};

export default ToDo;
