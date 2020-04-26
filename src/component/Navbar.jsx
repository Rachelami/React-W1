import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

function Navbar() {
	return (
		<Nav
			activeKey="/home"
			onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
		>
			<Nav.Item>
				<Nav.Link href="/home">SERVICES</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">WORK</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2" className="underline">THE TEAM</Nav.Link>
			</Nav.Item>
			<Nav.Item>
					<img className="logo" src="https://f0.pngfuel.com/png/545/355/black-telephone-clip-art-png-clip-art.png"></img>
			</Nav.Item>
		</Nav>
	);
}

export default Navbar;