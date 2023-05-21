import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
