import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/search" element={<SearchPage />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
