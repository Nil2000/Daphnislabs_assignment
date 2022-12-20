import './App.css';
import Header from './components/Header';
import MainBody from './components/MainBody';
import Path from './components/Path';
import Product_headings from './components/Product_headings';
import Search from './components/Search';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Header/>
      <Path/>
      <Search/>
      <Product_headings/>
      <div className="main-content">
        <Sidebar/>
        <MainBody/>
      </div>
    </div>
  );
}

export default App;
