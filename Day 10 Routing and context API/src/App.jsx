import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import Account from "./components/Account";
import { useState } from "react";
import LoginProtectionWrapper from "./auth/LoginProtectionWrapper";
import Profile from "./components/Profile";
import AuthContextProvider from "./context/providers/AuthContextProvider";
import CounterContextProvider from "./context/providers/CounterContextProvider";
function App() {
  return (
    <div>
      <AuthContextProvider>
        <CounterContextProvider>
          <Header />
        </CounterContextProvider>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/about"
            element={<LoginProtectionWrapper child={<About />} />}
          />
          <Route
            path="/accounts"
            element={<LoginProtectionWrapper child={<Account />} />}
          />
          <Route path="/in/:userid/profile" element={<Profile />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
