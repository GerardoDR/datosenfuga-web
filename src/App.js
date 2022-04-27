import './App.scss'
import Navbar from './components/Navbar/Navbar'
import Carrousel from './components/Carrousel/Carrousel';
import Paper from './landing/paper/Paper'
import Videos from './landing/videos/Videos';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Carrousel />
      <Paper />
      <Videos />
    </div>
  );
}

export default App
