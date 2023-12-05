import React from 'react'
import { Link } from 'react-router-dom'
import products from './data'

const Products = () => {
  return (
    <section className='section'>
      <div className='products'>
        {products.map((product) => {
          const { id, name, image } = product
          return (
            <article key={id}>
              <h4>{product.name}</h4>
              <Link to={`/products/${id}`}>Read More</Link>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Products