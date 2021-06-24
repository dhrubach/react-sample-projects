import ProductItem from "./ProductItem";
import styles from "./Products.module.scss";

const DUMMY_PRODUCTS = [
	{
		id: "p1",
		title: "First Item",
		description: `This is a dummy product!!`,
		price: 6,
	},
	{
		id: "p2",
		title: "Second Item",
		description: `This is another dummy product!!`,
		price: 8.99,
	},
];

const Products = (props) => {
	return (
		<section className={styles.products}>
			<h2>Buy your favorite products</h2>
			<ul>
				{DUMMY_PRODUCTS.map((product) => {
					return (
						<ProductItem
							key={product.id}
							id={product.id}
							title={product.title}
							price={product.price}
							description={product.description}
						/>
					);
				})}
			</ul>
		</section>
	);
};

export default Products;
