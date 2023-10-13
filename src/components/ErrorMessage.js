export const ErrorMessage = ({ children }) => (
	<div
		style={{
			color: "#cc0000",
			fontStyle: "italic",
			gridColumn: "span 2",
			marginTop: "-16px",
		}}
	>
		{children}
	</div>
);
