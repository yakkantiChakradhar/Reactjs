import './App.css';
import PropsOfReact from './newly/PropsOfReact_1';
import StateOfReact from './newly/StateOfReact_2';
import SetStateOfReact from './newly/SetStateOfReact_3';
import DestucturingInReact from './newly/DestucturingInReact_4';
import EventHandling from './newly/EventHandling_5';
import EventBinding from './newly/EventBinding_6';
function App() {
  return (
    <div className="App">
    <PropsOfReact name="cran" atName="crayon" />
    <StateOfReact />
    <SetStateOfReact /><br />
    <DestucturingInReact  name="abhinav" firstName="chandra paul"/>
    <EventHandling />
    <EventBinding />
    </div>
  );
}

export default App;
