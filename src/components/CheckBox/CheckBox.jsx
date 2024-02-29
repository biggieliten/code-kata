import { useState } from "react";
// const [animal, SetAnimal] = useState("");

const CheckBox = () => {
  const [cat, setCat] = useState(false);
  const [dog, SetDog] = useState(false);

  const handleCheckCat = () => {
    setCat(!cat);
  };

  const handleCheckDog = () => {
    SetDog(!dog);
  };
  return (
    <>
      <input onChange={handleCheckCat} type="checkbox" id="Cat" />
      <label for="Cat">Cat</label>
      <input onChange={handleCheckDog} type="checkbox" id="Dog" />
      <label for="Dog">Dog</label>

      <p>
        {dog && "Dog"}
        {cat && dog && " and "}
        {cat && "Cat"}
      </p>
    </>
  );
};

export default CheckBox;
