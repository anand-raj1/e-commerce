import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Discriptionbox from '../Components/DiscriptionBox/Discriptionbox';
import Relatedproducts from '../Components/RelatedProducts/Relatedproducts';

const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId) );
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product = {product}/>
      <Discriptionbox/>
      <Relatedproducts/>
    </div>
  )
}

export default Product