import "./Home.css";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import HeroPhoto from "../assets/restaurant-food.png";
import GreekSaladPhoto from "../assets/greek-salad.png";
import BrushettaPhoto from "../assets/brushetta.png";
import LemonDessertPhoto from "../assets/lemon-dessert.png";

const Home = () => {
	const specials = [
		{
			imgUrl: GreekSaladPhoto,
			title: "Greek Salad",
			price: 12.99,
			description:
				"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
		},
		{
			imgUrl: BrushettaPhoto,
			title: "Brushetta",
			price: 5.99,
			description:
				"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
		},
		{
			imgUrl: LemonDessertPhoto,
			title: "Lemon Dessert",
			price: 5.0,
			description:
				"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
		},
	];
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
			<section className="highlights">
				<div className="container">
					<h3>Specials</h3>
					<Button className="primary online-menu">Online Menu</Button>
					<div className="three">
						{specials.map((special) => (
							<Card special={special}></Card>
						))}
					</div>
				</div>
			</section>
		</main>
	);
};

export default Home;
