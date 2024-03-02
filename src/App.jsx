import Header from "./components/Header/Header";
import RepeatText from "./components/RepeatText/RepeatText";
import Counter from "./components/Counter/Counter";
import List from "./components/List/List";
import CheckBox from "./components/CheckBox/CheckBox";
import Radio from "./components/Radio/Radio";
import DropDown from "./components/DropDown/DropDown";
import ToDo from "./components/ToDo/ToDo";
import ColorBox from "./components/ColorBox/ColorBox";
import "./App.css";

function App() {
  return (
    <>
      <h1>Code Kata</h1>
      <Header headerText="hola amigo" />
      <RepeatText count="7" text="robin råkade ta bort root" />

      <div className="count">
        <Counter />
      </div>

      <div className="list">
        <List animalArray={["Crocodile", "Tiger", "Bear", "Cow", "Pig"]} />
      </div>

      <div className="checkbox">
        <CheckBox />
      </div>

      <>
        <Radio />
      </>
      <DropDown />
      <>
        <ToDo />
      </>

      <>
        <ColorBox
          colorList={[
            "black",
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "orange",
          ]}
        />
      </>
    </>
  );
}

export default App;
