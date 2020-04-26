import React from "react";
import "./App.css";
// import List from "./component/List";
import Box from "./component/Box";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<p>
        {/* <List name={"My Name"}></List> */}
        <Box name={"My Name"}></Box>
          </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click Me
				</a>
			</header>
		</div>
	);
}

export default App;
