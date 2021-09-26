import React from 'react'
import { ClothesCard } from '../Components/AllProducts/ClothesCard'
import { AccessoriesCard } from '../Components/AllProducts/AccessoriesCard'
import { ElectronicsCard } from '../Components/AllProducts/ElectronicsCard'
import styles from "../Components/styles/HomeCarousel.module.css"

export const HomeCardsCarousel = () => {

    const clothesArray = [
        {
            "id": 1,
            "product_name": "T-shirt",
            "img": "https://www.apetogentleman.com/wp-content/uploads/2019/06/best-mens-tshirts.jpg",
            "price": "500",
            "rating": 4.3,
            "category": "mens"
          },
          {
            "id": 2,
            "product_name": "Jeans",
            "img": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gh-jeans-index-1552316663.png?crop=0.941xw:0.936xh;0.0304xw,0.0639xh&resize=1200:*",
            "price": "300",
            "rating": 4.3,
            "category": "mens"
          },
          {
            "id": 3,
            "product_name": "Cargo",
            "img": "https://5.imimg.com/data5/GP/MD/MY-49357258/mens-cargo-pant-500x500.jpg",
            "price": "400",
            "rating": 4.3,
            "category": "mens"
          },
    ]

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
        <div className = {styles.cardsWrapper} >
            <div>
              {
                clothesArray?.map((item) => (
                  <ClothesCard {...item} />
                ))}
            </div>

            <div>
              {
                accessoriesArray?.map((item) => (
                  <AccessoriesCard {...item} />
                ))}
            </div>

            <div>
              {
                electronicsArray?.map((item) => (
                  <ElectronicsCard {...item} />
                ))}
            </div>
        </div>
    )
}
