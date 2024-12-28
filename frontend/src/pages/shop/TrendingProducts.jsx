import React, { useState } from 'react'
import ProductCards from './ProductCards'
import products from "../../data/products.json"

const TrendingProducts = () => {
    const [visibleProducts, setVisibleProducts] = useState(8);
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 4 )
    }
  return (
    <section className='section__container product__container'>
       <h2 className='section__header'>Trending Products</h2>
       <p className='section__subheader mb-12'>Discover the Trending picks: Elavate your style with our New Collections of Womwns Fashion Products</p>
    {/* products card*/}
    <div className='mt-12'>
    <ProductCards products={products.slice(0, visibleProducts)}/>
    </div>
    {/* laod more products */}
    <div>
        {
            visibleProducts < products.length && (
                <button className='btn' onClick={loadMoreProducts}>Load More</button>
            )
        }
    </div>
    </section>
  )
}

export default TrendingProducts
