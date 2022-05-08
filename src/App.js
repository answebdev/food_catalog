import { Routes, Route } from 'react-router-dom';
// Views
import Home from './views/Home';
import About from './views/About';
import Foods from './views/Foods';
import FilteredFoods from './views/FilteredFoods';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Styles
import './App.css';

// Article: https://dev.to/sanity-io/how-to-create-a-single-page-application-with-react-and-sanity-2ggl
// https://github.com/olawanlejoel/spa-react-sanity
// This project is a "clean project with no predefined schemas" (schemas created from scratch)

// React 18 Version

const App = () => {
  return (
    <div>
      <div className='max-w-full'>
        <Header />
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/foods' element={<Foods />} />
        <Route path='/FilteredFoods/:slug' element={<FilteredFoods />} />
      </Routes>
      <div className='max-w-full'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
