import React from "react";

interface Props {
	message?: string;
}

const Loading: React.FC<Props> = ({ message = "Loading..." }) => {
	return (
		<div
			className="d-flex flex-column justify-content-center align-items-center"
			style={{ height: "50vh" }}
			role="status"
			aria-live="polite"
		>
			<div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
			<span className="visually-hidden">{message}</span>
			<p className="mt-3 text-center">{message}</p>
		</div>
	);
};

export default Loading;
