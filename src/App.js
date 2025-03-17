import './App.css';
import Header from './my_components/header';
import Footer from './my_components/footer'
import Todos from './my_components/Todos';

function App() {
  return (
  <div >
    <Header  searchBar={true}/>
    <Todos></Todos>
    <Footer></Footer>
    
 </div >
  );
}

export default App;
