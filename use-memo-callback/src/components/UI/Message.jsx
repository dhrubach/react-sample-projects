import React from "react";

const Message = (props) => {
	console.log(`re-evaluating message component`);
	return <p>{props.showMessage ? `Welcome to React` : ``}</p>;
};

export default React.memo(Message);
