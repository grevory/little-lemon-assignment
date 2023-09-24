import DeliveryIcon from "../assets/delivery.svg";

export function Card({ special }) {
	return (
		<div className="special-card">
			<img
				src={special.imgUrl}
				alt={special.title}
				className="card-img"
			/>
			<div className="card-content">
				<div className="card-header">
					<h3>{special.title}</h3>
					<div className="card-price">${special.price}</div>
				</div>
				<p>{special.description}</p>
				<button className="card-button">
					Order a delivery{" "}
					<img src={DeliveryIcon} alt="Delivery" height="12" />
				</button>
			</div>
		</div>
	);
}
