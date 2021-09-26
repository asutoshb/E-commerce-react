import React from 'react'
import { AccessoriesCard } from '../Components/AllProducts/AccessoriesCard'
import styles from "../Components/styles/HomeCarousel.module.css"

export const AccessoriesCarousel = () => {

    const accessoriesArray = [
        {
            "id": 1,
            "product_name": "HP Laptop",
            "img": "https://images-na.ssl-images-amazon.com/images/I/51y8P2rYc5L._AC_SX425_.jpg",
            "price": "35,000",
            "rating": 4.3,
            "category": "laptops"
          },
          {
            "id": 2,
            "product_name": "RedMI",
            "img": "https://i01.appmifile.com/webfile/globalimg/in/cms/AB364A54-1B83-9A20-B4F3-05BCE9135921.jpg",
            "price": "10,000",
            "rating": 4.3,
            "category": "mobiles"
          },
          {
            "id": 3,
            "product_name": "Boats Headphones",
            "img": "https://images-na.ssl-images-amazon.com/images/I/61US9yCTRJL._SL1500_.jpg",
            "price": "1,599",
            "rating": 4.3,
            "category": "headphones"
          },        
    ]


    return (
        <div>
            <div>
                <button>Accessories</button>
                <div>
                  {
                    accessoriesArray?.map((item) => (
                      <AccessoriesCard {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
