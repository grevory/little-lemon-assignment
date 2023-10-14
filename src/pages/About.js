import "./Home.css";
import HeroPhoto from "../assets/restaurant-food.png";

const About = () => {
	return (
		<main>
			<section className="hero green-area">
				<div className="container">
					<aside>
						<h1>Little Lemon</h1>
						<h2>Chicago</h2>
						<p>
							We are a family-owned Mediterranean restaurant,
							focused on traditional recipes served with a modern
							twist.
						</p>
						<a href="/reservation" className="primary">
							Reserve a Table
						</a>
					</aside>
					<img
						src={HeroPhoto}
						alt="Little Lemon restaurant dish"
						className="hero-sample"
					/>
				</div>
			</section>
			<section className="content">
				<div className="container">
					<h3>About</h3>
					<p>This is where the About page will be.</p>
				</div>
			</section>
		</main>
	);
};

export default About;
