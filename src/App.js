import logo from './logo.svg';
import './App.css';

// Article: https://dev.to/sanity-io/how-to-create-a-single-page-application-with-react-and-sanity-2ggl
// https://github.com/olawanlejoel/spa-react-sanity
// This project is a "clean project with no predefined schemas" (schemas created from scratch)

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
