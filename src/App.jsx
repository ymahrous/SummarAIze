import './App.css';
import Hero from './components/hero';
import Demo from './components/demo';

const App = () => {
  return (
    <>
        <div className="main">
            <div className="gradient" />
        </div>
        <div className="app">
            <Hero />
            <Demo />
        </div>
    </>
  )
}

export default App;