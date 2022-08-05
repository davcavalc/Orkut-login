import React from "react";
import Header from "./Componentes/Header";
import LeftSide from "./Componentes/LeftSide";
import Main from "./Componentes/Main";
import Footer from "./Componentes/Footer.jsx"
import "./index.css";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div className="flex ml-[128px] flex-row">
				<Main />
				<LeftSide />
			</div>
			<Footer/>
		</React.Fragment>
	);
}

export default App;
