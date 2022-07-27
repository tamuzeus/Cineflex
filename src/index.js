import ReactDOM from "react-dom";
import "./reset.css"
import "./index.css"
import Header from "./header/header";
import Selectionmovie from "./selectionmovie/selectionmovie";
import Selectionhour from "./selectionhour/selectionhour";
import Selectionseat from "./selectionsseat/selectionseat";

function App() {

    return (

        <>
            <Header />
            <Selectionmovie />
            {/* <Selectionhour />
            <Selectionseat/> */}
        </>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'))