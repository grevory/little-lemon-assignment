import RestaurantPhoto from "../assets/restaurant.png";
import { Nav } from "./Nav";
export function Footer() {
	return (
		<footer class="footer">
			<div className="container">
				<section>
					<img
						src={RestaurantPhoto}
						alt="Our Restaurant"
						style={{ width: "100%" }}
					/>
				</section>
				<section>
					<Nav className="footer-menu" />
				</section>
				<section>
					<strong>Contact</strong>
					<br />
					<br />
					<addr>
						123 Main Rd
						<br />
						Chicago, IL
					</addr>
					<br />
					<br />
					<a href="tel:8005551234">1 (800) 555-1234</a>
					<br />
					<a href="mailto:hi@little-lemon.com">hi@little-lemon.com</a>
					<br />
				</section>
				<section>
					<strong>Social Media</strong>
					<br />
					<br />
					<a href="https://facebook.com">Facebook</a>
					<br />
					<a href="https://twitter.com">Twitter</a>
					<br />
					<a href="https://instagram.com">Instagram</a>
					<br />
					<a href="https://tiktok.com">TikTok</a>
					<br />
				</section>
			</div>
		</footer>
	);
}
