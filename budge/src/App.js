import logo from './logo.svg';
import './App.css';
import React from "react"
import Signup from './components/Signup';
import Settings from './components/Settings';
import Transactions from './components/Transactions';
import Charts from './components/Charts';
import Accounts from './components/Accounts';
import Footer from './components/Footer';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  const [navLink, setNavLink] = React.useState("transactions");
  return (
    <div className="App">
      <BrowserRouter >
      <Header text={navLink} setNavLink={setNavLink}/>
        <Routes>
          <Route exact path="transactions" element={<Transactions />} />
          <Route path="charts" element={<Charts />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="settings">
            <Route index={true} element={<Settings navLink={navLink} setNavLink={setNavLink}/>} />
            <Route index={false} path="signup" element={<Signup />} />
          </Route>
        </Routes>
        <Footer navLink={navLink} setNavLink={setNavLink}/>
      </BrowserRouter>

    </div>
  );
}

export default App;


// References

// https://stackoverflow.com/questions/64291991/nested-routing-is-not-working-in-react-router-v6