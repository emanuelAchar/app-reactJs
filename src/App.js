
import './App.css';
import Header from './components/Header/Header.js';
import NavBar from './components/navbar/Navbar.js';
import CardComponent from './components/cardComponent/card';
import Footer from './components/Footer/footer';
import { Icon } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
   <div className='App'>
        <Header title="Partes de PC"/>
        <NavBar />
      <div className="cards">
      <div>
        <CardComponent name="Motherboard" imagen="" description="Todo en Motherboard" />
        <Icon disabled name='microchip' />
      </div>
      <div>
        <CardComponent name="Teclado" imagen="" description="Los mejores teclados" />
        <Icon disabled name='keyboard' />
      </div>

      <div>  
      <CardComponent name="Discos" imagen="" description="Para guardar toda tu info" />
      <Icon disabled name='hdd' />
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default App
