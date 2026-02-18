import { productsApi, useGetAllProductsQuery } from '../app/service/dummyData'

const AllProducts = () => {
	const { data, isError, isLoading } = useGetAllProductsQuery()

	if (isError) {
		return <h1>We got an error</h1>
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	return (
		<div>
			{data?.products.map((product) => (
				<div key={product.id}>
					<h1>{product.title}</h1>
					<p>{product.description}</p>
				</div>
			))}
		</div>
	)
}

export default AllProducts