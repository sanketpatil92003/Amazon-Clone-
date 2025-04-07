import "./App.css";
import { BrowserRouter as Router, Routers, Route } from "react-router-dom";
import Header from  "./Layout/Header/header";
import Home from  "./Components/Home/Home";
const App = () => {
    return (
        <>
        <Router>
            <div className="App"></div>
            <Router>
                <Route path="/" element={[<Header/>, <Home/>]}></Route>
            </Router>
        </Router>
        
        </>
    )
}
export default App;
