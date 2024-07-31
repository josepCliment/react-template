import "./App.css";
import ButtonCustom from "./components/UI/atoms/Button/ButtonCustom";
import TableCustom from "./components/UI/atoms/Table/TableCustom";

const dummyData = [{ id: 20, type: "Test" }];
const dummyHeaders = [{ label: "id" }, { label: "Test" }, { label: "Test 21" }];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonCustom label="test2" variant="danger" onClick={() => {}} />
        <TableCustom rows={dummyData} columns={dummyHeaders} />
      </header>
    </div>
  );
}

export default App;
