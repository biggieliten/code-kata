import { useState } from "react";

const Radio = () => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <legend>Select an input: {input} </legend>
      <fieldset>
        {/*Genom att använda samma namn för inputsen togglas den aktiva knappen av
      automatiskt när man väljer en annan.
	 
	  Value är det värdet som kommer att visas inom legend-taggen.
	  */}
        <div>
          <input
            type="radio"
            id="hola"
            name="drone"
            value="hola"
            onChange={handleChange}
          />
          <label for="hola">hola</label>
        </div>
        <div>
          <input
            type="radio"
            id="amigo"
            name="drone"
            value="amigo"
            onChange={handleChange}
          />
          <label for="amigo">Amigo</label>
        </div>
      </fieldset>
    </>
  );
};

export default Radio;
