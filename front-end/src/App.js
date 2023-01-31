import './app.css';
import LayoutMain from './layouts/LayoutMain';
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      <LayoutMain page={<Home/>}/>
    </div>
  );
}

export default App;
