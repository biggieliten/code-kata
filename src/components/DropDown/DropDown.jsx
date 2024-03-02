import { useState } from "react";

const DropDown = () => {
  const [option, setOption] = useState();

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      <select onChange={handleChange} name="dropdown" id="">
        <option value="robin">robin</option>
        <option value="råkade">råkade</option>
        <option value="ta">ta</option>
        <option value="bort">bort</option>
        <option value="root">root</option>
      </select>

      <div>{option}</div>
    </>
  );
};

export default DropDown;
