import { replaceItems } from "./cart-slice";

const fetchCartData = () => {
	return async (dispatch) => {
		const sendRequest = await fetch("");
		const data = await sendRequest.json();
		dispatch(replaceItems(data));
	};
};

const postCartData = (data) => {
	return async () => {
		const sendRequest = async () => {
			await fetch("", {
				method: "PUT",
				body: JSON.stringify({
					items: data.items,
					totalItems: data.totalItems,
				}),
			});
		};

		try {
			await sendRequest();
		} catch (error) {
			throw new Error("Failed to put cart data");
		}
	};
};

export { fetchCartData, postCartData };
