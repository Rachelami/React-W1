import React from "react";
import "./App.css";
// import List from "./component/List";
// import Box from "./component/Box";
// import Navbar from "./component/Navbar";
// import MiddleText from "./component/MiddleText";
// import Column from "./component/Column";
// import UserList from "./component/UserList";
import Alive from "./component/Alive";


function App() {
	return (
    <div className="App">
    {/* <Navbar></Navbar> */}
      
			<header className="App-header">
				<p>
					{/* <List name={"My Name"}></List> */}
					{/* <Box name={"My Name"}></Box> */}
          {/* <MiddleText></MiddleText> */}
          {/* <Column></Column> */}
					{/* <UserList></UserList> */}
          <Alive></Alive>
				</p>
				{/* <a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Click Me
				</a> */}
			</header>
		</div>
	);
}

export default App;
