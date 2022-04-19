import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Checkout from './Pages/Checkout/Checkout';
import Courses from './Pages/Home/Courses/Courses';
import Home from './Pages/Home/Home/Home';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/SignIn/SignIn/SignIn';
import SignUp from './Pages/SignIn/SignUp/SignUp';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/courses' element={<Courses/>} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout/>
          </RequireAuth>
        } />
        <Route path='/about' element={<About/>} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
