import { isEmpty } from 'lodash'

const Products = ({ products }) => {
  console.log(products)
  if (isEmpty(products)) {
    return <div>empty</div>
  }

  return (
    <div className="flex flex-wrap">
      {products.length
        ? products.map((product) => (
            <div
              key={product?.id}
              className="my-2 overflow-hidden px-2 w-full md:w-1/3 xl:w-1/4"
              style={{ border: '1px solid' }}
            >
              product 1
            </div>
          ))
        : ''}
    </div>
  )
}

export default Products
