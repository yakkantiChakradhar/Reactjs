import './App.css';
import ClickRendering from './newly/ClickRendering';
import CounterRendering from './newly/CounterRendering';
import HoverRendering from './newly/HoverRendering';
import RenderProps from './newly/RenderProps_1';
/* import ClickCounterHOC from './newly/ClickCounterHOC';
import HoverCounterHOC from './newly/HoverCounterHOC'; */
//import UpdateComponent from './newly/WithCounter';
/* import ErrorBoundary from './newly/ErrorBoundary';
import HeroError from './newly/HeroError'; */
//import FRparentInput from './newly/FRparentInput';
//import FocusInput from './newly/FocusInput13_1.2';
//import ReactRefs from './newly/ReactRefs_13';
// import MemoParent from './newly/MemoParent';
//
//import FragmentDemo from './newly/FragmentDemo_11';
//import PureComp from './newly/PureComponent_12';

/* import FormValidation from './newly/FormValidation_10'; */
//import LifeCycleMethods from './newly/LifeCycleMethods';
/* import PropsOfReact from './newly/PropsOfReact_1';
import StateOfReact from './newly/StateOfReact_2';
import SetStateOfReact from './newly/SetStateOfReact_3';
import DestucturingInReact from './newly/DestucturingInReact_4';
import EventHandling from './newly/EventHandling_5';
import EventBinding from './newly/EventBinding_6';
import MethodsAsProps from './newly/MethodsAsProps_7';
import ConditionalRendering from './newly/ConditionalRendering_8';
 import ListRendering from './newly/ListRendering_9'; 
import ListRender from './newly/ListRendering_9.1'; */
/* import StyleSheets from './newly/StyleSheets';
import './cssStyle.css';
import styles from './cSSStyle.module.css' */
function App() {
  return (
    <div className="App">
    {/* <PropsOfReact name="cran" atName="crayon" />
    <StateOfReact />
    <SetStateOfReact /><br />
    <DestucturingInReact  name="abhinav" firstName="chandra paul"/>
    <EventHandling />
    <EventBinding />
    <MethodsAsProps /><br />
    
    <ConditionalRendering />
    {/* <ListRendering /> */}
   {/*  <ListRender />  */}
{/* <StyleSheets primary={true} />
<h1 className='error'>Error handling</h1>
<h2 className={styles.handling}>Editing handiled</h2> */}

{/* <FormValidation /> */}
{/* <LifeCycleMethods /> */}
{/* <FragmentDemo /> */}
{/* <PureComp /> */}
{/* <MemoParent ></MemoParent> */}
{/* <ReactRefs /> */}
{/* <FocusInput /> */}
{/* <FRparentInput /> */}
{/* <ErrorBoundary><HeroError heroName='batman'/></ErrorBoundary>
<ErrorBoundary><HeroError heroName='superman'/></ErrorBoundary>
<ErrorBoundary><HeroError heroName='joker'/></ErrorBoundary> */}
{/* <ClickCounterHOC fname="yakkanti" />
<HoverCounterHOC fname="chakri" />  */}
<RenderProps name={(isloggedin)=>isloggedin ?'chakri':"guest"} />

<CounterRendering render={(count,incrementcount)=>(<ClickRendering count={count} incrementcount={incrementcount} />)} />
<CounterRendering render={(count,incrementcount)=>(<HoverRendering count={count} incrementcount={incrementcount}/>)} />
    </div>
  );
}

export default App;
