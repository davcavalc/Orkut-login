import React from "react";
import BottomBar from "./Componentes/BottomBar";
import Header from "./Componentes/Header";
import LeftSide from "./Componentes/LeftSide";
import Main from "./Componentes/Main";
import "./index.css";

function App() {
	return (
		<React.Fragment>
			<Header />
			<div className="flex ml-[128px] flex-row">
				<Main />
				<LeftSide />
			</div>
			<BottomBar />
		</React.Fragment>
	);
}

export default App;
