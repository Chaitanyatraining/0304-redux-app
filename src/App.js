import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Routing from './Components/Routing/Routing';
import UseMemoHook from './Components/UseMemoHook';
import UseCallbackHook from './Components/UseCallbackHook';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Routing /> */}
      {/* <UseMemoHook /> */}
      <UseCallbackHook />
    </div>
  );
}

export default App;
