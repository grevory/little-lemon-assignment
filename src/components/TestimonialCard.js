import React from "react";
import "./TestimonialCard.css";
import StarIcon from "../assets/star.svg";

const TestimonialCard = ({ guest, quote, image, rating }) => {
	return (
		<div className="testimonial-card" data-testid="testimonial-card">
			<div className="testimonial-rating">
				{rating &&
					[...Array(rating)].map((_, index) => (
						<img
							key={index}
							src={StarIcon}
							alt="star"
							height={15}
							width={15}
						/>
					))}
			</div>

			<div className="testimonial-card-container">
				<img
					className="testimonial-profile-picture"
					src={image}
					alt="Author"
					height={50}
				></img>
				<p className="testimonial-card-author">{guest}</p>
			</div>
			<p className="testimonial-description">{quote}</p>
		</div>
	);
};

export default TestimonialCard;
