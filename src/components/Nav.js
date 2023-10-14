import "./Nav.css";

export function Nav({ className = "main-menu" }) {
	return (
		<nav className={className}>
			<ul>
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/about">About</a>
				</li>
				<li>
					<a href="/menu">Menu</a>
				</li>
				<li>
					<a href="/reservation">Reservation</a>
				</li>
				<li>
					<a href="/order">Order Online</a>
				</li>
				<li>
					<a href="/login">Login</a>
				</li>
			</ul>
		</nav>
	);
}
