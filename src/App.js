import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function App() {
  const nombre = "joaquin"
  const month = "Febrero"
  return (
    <div className="App">
      <Header nombre={nombre}/>
      <Footer nombre={nombre} mes={month}/>
    </div>
  );
}

export default App;
