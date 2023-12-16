import './App.css';
import {BrowserRouter as Router, Route, Switch, Routes, Navigate, useNavigate} from 'react-router-dom';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListCustomerComponent from './components/ListCustomerComponent';
import AddCustomerComponent from './components/AddCustomerComponent';
import ListPersonelComponent from './components/ListPersonelComponent';
import WelcomeScreenComponent from './components/WelcomeScreenComponent';
import AddPersonelComponent from './components/AddPersonelComponent';
import SystemInfoComponent from './components/SystemInfoComponent';
import ContactComponent from './components/ContactComponent';
import AboutUsComponent from './components/AboutUsComponent';

function App() {
  return (
    <div className='App'>
      <Router>
        <HeaderComponent/>
        <div className='container'>
          <Routes>
            <Route path='/' element={<WelcomeScreenComponent />} />
            <Route path = "/customers" element={<ListCustomerComponent/>}></Route>
            <Route path='/personel' element={<ListPersonelComponent/>}></Route>
            <Route path = "/add-customer" element={<AddCustomerComponent/>}></Route>
            <Route path="/edit-customer/:recordId" element={<AddCustomerComponent/>}></Route>
            <Route path = "/add-personel" element={<AddPersonelComponent/>}></Route>
            <Route path="/edit-personel/:recordId" element={<AddPersonelComponent/>}></Route>
            <Route path="/system-info" element={<SystemInfoComponent/>}></Route>
            <Route path="/contact" element={<ContactComponent/>}></Route>
            <Route path="/aboutUs" element={<AboutUsComponent/>}></Route>


          </Routes>
        </div>
        <FooterComponent/>
        </Router>
    </div>
  );
}

export default App;
