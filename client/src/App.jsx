import { AuthProvider } from "./context/authContext"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header";
import Spinner from "./components/Spinner/Spinner";
import './App.css';
import { Routes,Route, useNavigate } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from "./components/Home/Home";
import Catalog from "./components/Catalog/Catalog";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Create from "./components/Create/Create";
import Details from "./components/Details/Details";
import { useState } from "react";
import Logout from "./components/Logout/Logout";
import Edit from "./components/Edit/Edit";
import ErrorBoundory from "./components/errorBoundory";
import AuthGuard from "./components/guards/AuthGuard";
import GuessGuard from "./components/guards/GuessGuard";
import ErrorPath from "./components/ErrorPath/ErrorPath";
import About from "./components/About/About";
import CountryCapitalGame from "./components/Country-Capital-Game/Country-Capital-Game";

library.add(fab);


function App() {
  


  return (
    <ErrorBoundory>
      <AuthProvider>
        <div className="root">
          <Header className="header" />

          <main className="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/catalog" element={<Catalog />} />

              <Route element={<GuessGuard />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>

              <Route element={<AuthGuard />}>
                <Route path="/create" element={<Create />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/country-capital-game" element={<CountryCapitalGame/>} />
                <Route
                  path="/catalog/details/:productId"
                  element={<Details />}
                />
                <Route
                  path="/catalog/details/:productId/edit"
                  element={<Edit />}
                />
                <Route path="/catalog/profile/:userId" element={<Profile />} />
              </Route>

              <Route path="*"element={<ErrorPath/>} />
            </Routes>
          </main>

          <Footer className="footer" />
        </div>
      </AuthProvider>
    </ErrorBoundory>
  );
}

export default App
