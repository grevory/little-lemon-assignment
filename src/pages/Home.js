import "./Home.css";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import HeroPhoto from "../assets/restaurant-food.png";
import GreekSaladPhoto from "../assets/greek-salad.png";
import BrushettaPhoto from "../assets/brushetta.png";
import LemonDessertPhoto from "../assets/lemon-dessert.png";
import TestimonialCard from "../components/TestimonialCard";
import FoodPhoto from "../assets/restaurant.png";
import ChefPhoto from "../assets/restaurant-chef.jpg";

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

	const testimonials = [
		{
			id: 1,
			guest: "Ryland",
			quote:
				"Little Lemon's Bruschetta is a symphony of flavors; perfectly crispy bread coupled with the freshest tomatoes.",
			image:
				"https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-3763188.jpg&fm=jpg",
			rating: 5,
		},
		{
			id: 2,
			guest: "Rachael",
			quote:
				"The burger at Little Lemon was a taste revelation with its juicy, perfectly cooked meat and harmonious ingredient pairing.",
			image:
				"https://www.irreverentgent.com/wp-content/uploads/2018/03/Awesome-Profile-Pictures-for-Guys-look-away2.jpg",
			rating: 5,
		},
		{
			id: 3,
			guest: "Paige",
			quote:
				"The Greek Salad at Little Lemon was delightfully fresh and flavorful, with a high-quality dressing. ",
			image:
				"https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
			rating: 4,
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
			<section className="tesimonials green-area">
				<div className="container">
					<h3>Testimonials</h3>
					<div className="three">
						{testimonials.map(({ guest, quote, image, rating }) => (
							<TestimonialCard
								guest={guest}
								quote={quote}
								image={image}
								rating={rating}
							></TestimonialCard>
						))}
					</div>
				</div>
			</section>
			<section className="about">
				<div className="container">
					<div>
						<h3>Little Lemon</h3>
						<h4>Chicago</h4>
						<p className="about-description">
							Nestled in the heart of bustling Chicago, Little
							Lemon is where modern flair meets cozy nostalgia.
							Our diverse, artisanal menu, featuring delectable
							bruschettas, succulent burgers, and refreshing Greek
							salads, is a testament to our belief that food is an
							art. Crafted by expert chefs with locally-sourced
							ingredients, our dishes not only delight the palate
							but nourish the soul. Whether you're seeking a
							romantic dinner, a family meal, or a relaxed
							atmosphere with friends, Little Lemon is your ideal
							culinary destination. Find us in the heart of
							Chicago for an unforgettable experience.
						</p>
					</div>

					<img
						className="about-image-under"
						src={FoodPhoto}
						alt="Restarurant food"
						height={200}
						width={200}
					/>
					<img
						className="about-image-above"
						src={ChefPhoto}
						alt="Restarurant food"
						height={200}
						width={200}
					/>
				</div>
			</section>
		</main>
	);
};

export default Home;
