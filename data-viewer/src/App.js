
import Header from './components/Header'
import DataDisplay from './components/DataDisplay';
import Navigator from './components/Navigator'
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <section></section>
      <main>
        <aside></aside>
        <Navigator/>
        <article></article>
      </main>
    </div>
  );
}

export default App;
