import { Routes, Route } from 'react-router-dom';
// views
import Home from './views/Home';
import About from './views/About';
import Foods from './views/Foods';
import FilteredFoods from './views/FilteredFoods';

// styles
import './App.css';

// Article: https://dev.to/sanity-io/how-to-create-a-single-page-application-with-react-and-sanity-2ggl
// https://github.com/olawanlejoel/spa-react-sanity
// This project is a "clean project with no predefined schemas" (schemas created from scratch)

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/foods' element={<Foods />} />
        <Route exact path='/filteredfoods' element={<FilteredFoods />} />
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
