import "./Button.css";

export const Button = ({ children, className, onClick, ...attrs }) => (
	<button className={`btn ${className}`} onClick={onClick} {...attrs}>
		{children}
	</button>
);
