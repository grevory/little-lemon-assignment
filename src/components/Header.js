import { Nav } from "./Nav";
import Logo from "./Logo.svg";

export function Header(children) {
	return (
		<header>
			<div className="container">
				<img src={Logo} alt="Little Lemon" />
				<Nav></Nav>
			</div>
		</header>
	);
}
