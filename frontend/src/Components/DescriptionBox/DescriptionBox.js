import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform designed to facilitate the buying and selling of goods and services over the internet. It features a comprehensive product catalog that includes detailed descriptions, images, prices, and specifications, allowing customers to easily browse and find items. Advanced search functionality and filtering options enhance the shopping experience, while user accounts enable customers to save information for quicker checkouts, track orders, and manage returns. </p>
        <p>The virtual shopping cart and secure checkout process streamline the transaction, with integration of various payment methods for convenience. Order management systems handle inventory, processing, and shipping logistics, ensuring efficient delivery and customer notifications. </p>
      </div>
    </div>
  )
}

export default DescriptionBox
