import "./Nav.css";

export function Nav(children) {
	return (
		<nav className="main-menu">
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">About</a>
				</li>
				<li>
					<a href="/">Menu</a>
				</li>
				<li>
					<a href="/">Reservation</a>
				</li>
				<li>
					<a href="/">Order Online</a>
				</li>
				<li>
					<a href="/">Login</a>
				</li>
			</ul>
		</nav>
	);
}
