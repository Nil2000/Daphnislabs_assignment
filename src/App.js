import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Path from './components/Path';
import ProductHeadings from './components/ProductHeadings';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Path/>
      <Search/>
      <ProductHeadings/>
      <div className="main-content">
        <Sidebar/>
        <MainBody/>
      </div>
    </div>
  );
}

export default App;
