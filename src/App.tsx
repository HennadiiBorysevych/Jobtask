import "./App.css";
import { Routes, Route } from "react-router-dom";

import CardList from "./components/CardList/CardList";
import Tweets from "./components/Tweets/Tweets";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<CardList />} />
          <Route path="/tweets" element={<Tweets />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
