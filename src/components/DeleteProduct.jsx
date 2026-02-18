// import { useDeleteProductMutation } from '../app/service/dummyData'

// const DeleteProduct = ({ productId }) => {
// 	const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation()

// 	if (error) {
// 		return <h1>Error: {error?.data?.message}</h1>
// 	}

// 	if (isLoading) {
// 		return <h1>Loading...</h1>
// 	}

// 	const handleDeleteProduct = async () => {
// 		try {
// 			await deleteProduct(productId)

// 		} catch (err) {
// 			console.error('Error deleting product ', err)
// 		}
// 	}

// 	return (
// 		<div>
// 			<h1>{data?.title ? `${data.title} successfully deleted` : ""}</h1>
// 			<button onClick={handleDeleteProduct} disabled={isLoading}>Delete product</button>
// 		</div>
// 	);
// }

// export default DeleteProduct;


import React from 'react'
import { useDeleteProductMutation } from '../app/service/dummyData'

const DeleteProduct = ({ productId }) => {
	const [deleteProduct, { data, error, isLoading }] = useDeleteProductMutation()

	if (error) {
		return <h1>Error: {error}</h1>
	}

	if (isLoading) {
		return <h1>Loading...</h1>
	}

	const handleDeleteProduct = async () => {
		try {
			await deleteProduct(productId)
		} catch (error) {
			console.error('error ', err)
		}
	}

	return (
		<div>
			<h1>{data?.title ? `${data.title} deleted` : ''}</h1>
			<button onClick={handleDeleteProduct} disabled={isLoading}>Delete product</button>
		</div>
	)
}

export default DeleteProduct