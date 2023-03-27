import './App.css';
import PropsOfReact from './newly/PropsOfReact_1';
import StateOfReact from './newly/StateOfReact_2';
import SetStateOfReact from './newly/SetStateOfReact_3';
import DestucturingInReact from './newly/DestucturingInReact_4';
import EventHandling from './newly/EventHandling_5';
import EventBinding from './newly/EventBinding_6';
import MethodsAsProps from './newly/MethodsAsProps_7';
import ConditionalRendering from './newly/ConditionalRendering_8';
/* import ListRendering from './newly/ListRendering_9'; */
import ListRender from './newly/ListRendering_9.1';
function App() {
  return (
    <div className="App">
    <PropsOfReact name="cran" atName="crayon" />
    <StateOfReact />
    <SetStateOfReact /><br />
    <DestucturingInReact  name="abhinav" firstName="chandra paul"/>
    <EventHandling />
    <EventBinding />
    <MethodsAsProps /><br />
    
    <ConditionalRendering />
    {/* <ListRendering /> */}
    <ListRender />

    </div>
  );
}

export default App;
