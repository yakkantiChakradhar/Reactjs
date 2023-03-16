import './App.css';
import PropsOfReact from './newly/PropsOfReact_1';
import StateOfReact from './newly/StateOfReact_2';
import SetStateOfReact from './newly/SetStateOfReact_3';
function App() {
  return (
    <div className="App">
    <PropsOfReact name="cran" atName="crayon" />
    <StateOfReact />
    <SetStateOfReact />
    </div>
  );
}

export default App;
