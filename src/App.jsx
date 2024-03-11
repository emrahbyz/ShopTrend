import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import PageContainer from "./containers/PageContainer";

function App() {
  return (
    <div>
      <PageContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </PageContainer>
    </div>
  );
}

export default App;
