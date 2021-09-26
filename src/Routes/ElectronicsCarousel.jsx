import React from 'react'
import { ElectronicsCard } from '../Components/AllProducts/ElectronicsCard'
import styles from "../Components/styles/HomeCarousel.module.css"

export const ElectronicsCarousel = () => {

    const electronicsArray = [
        {
            "id": 1,
            "product_name": "Samsung Microwave",
            "img": "https://images.samsung.com/is/image/samsung/in-21-litre-convection-microwave-oven-ce73jd-b-ce73jd-b-xtl-Black-121357600?$720_576_PNG$",
            "price": "500",
            "rating": 4.3,
            "category": "microwave"
          },
          {
            "id": 2,
            "product_name": "MI LED TV",
            "img": "https://global.appmifile.com/webfile/globalimg/in/cms/A7442D32-F379-BD0A-4B22-A262258E2756.jpg",
            "price": "300",
            "rating": 4.3,
            "category": "television"
          },
          {
            "id": 3,
            "product_name": "Koryo Microwave",
            "img": "https://www.hometown.in/media/product/19/0163/58389/1.jpg",
            "price": "400",
            "rating": 4.3,
            "category": "microwave"
          },
    ]

    return (
        <div>
            <div>
                <button>Electronics</button>
                <div>
                  {
                    electronicsArray?.map((item) => (
                      <ElectronicsCard {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
