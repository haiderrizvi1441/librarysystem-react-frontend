
import './App.css';
import { HomePage } from './Layouts/HomePage/HomePage';
import { Footer } from './Layouts/NavbarAndFooter/Footer';
import { NavBar } from './Layouts/NavbarAndFooter/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <HomePage/>
      <Footer/>
    </div>
  )
}

export default App;
