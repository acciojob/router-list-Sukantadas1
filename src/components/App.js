// File: src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ItemListPage from "./ItemListPage";
import ItemDetailsPage from "./ItemDetails";

function App() {
  return (
    <Router>
      <main>
        <nav>
          <ul>
            <li>
              <Link to="/items">Item List</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route exact path="/items">
          <ItemListPage />
        </Route>
        <Route path="/items/:itemId">
          <ItemDetailsPage />
        </Route>
      </main>
    </Router>
  );
}

export default App;
