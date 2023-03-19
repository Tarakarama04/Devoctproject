import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Blog_Page from './Blogpage/Blog_Page';

function App() {
  return (
    <div className="App">
       <Homepage/>
     <Routes>
      <Route path='/blog' element={<Blog_Page/>}/>
     </Routes>
    </div>
  );
}

export default App;
