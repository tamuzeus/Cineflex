import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css"
import "./index.css"
import Header from "./header/header";
import Selectionmovie from "./selectionmovie/selectionmovie";
import Selectionhour from "./selectionhour/selectionhour";
import Selectionseat from "./selectionsseat/selectionseat";
import Selectionsucess from "./selectionsucess/selectionsucess";
import { useState } from "react";

function App() {

    const [info, setInfo] = useState(null)

    return (
        
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Selectionmovie />} />
                <Route path="/hour/:HourID" element={<Selectionhour />} />
                <Route path="/seat/:SeatID" element={<Selectionseat setInfo={setInfo}/>} />
                <Route path="/sucess" element={<Selectionsucess info={info} />} />
            </Routes>
        </BrowserRouter>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))