
import './App.css';
import ContainerOne from './Components/ContainerOne/ContainerOne';
import ContainerTwo from './Components/ContainerTwo/ContainerTwo';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <ContainerOne/>
      <ContainerTwo/>
    </div>
  );
}

export default App;
