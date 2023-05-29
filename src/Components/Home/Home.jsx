import { Box } from '@chakra-ui/react';
import React from 'react'
import Caro1 from '../Caro/Caro1';
import MainBox from '../Navbar/MainBox';
import Categories from '../ShopCategory/Categories';
import styles from "./Home.module.css"
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div>
         <MainBox />
          <Categories />
          <Caro1 />
         <Box>
          <div className={styles.container}>
        <div className={styles.card}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Storm_Call.jpg?v=1682408982" />
          <div className={styles.cardTitle}>Boat headphone 1</div>
        </div>
        <div className={styles.card}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/9da7e1ae-89f2-42c4-9714-76ac5ec83817_300x.png?v=1625045743" />
          <div className={styles.cardTitle}>Boat headphone 2</div>
        </div>
        <div className={styles.card}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/back_300x.png?v=1668599490" />
          <div className={styles.cardTitle}>Boat headphone 3</div>
        </div>
        <div className={styles.card}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/MI-2_300x.png?v=1658736611" />
          <div className={styles.cardTitle}>Boat headphone 4</div>
        </div>
        <div className={styles.card}>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/products/main-image-1_300x.png?v=1661272676" />
          <div className={styles.cardTitle}>Boat headphone 5</div>
        </div>
      </div>
          </Box>
          <Footer />
    </div>
  )
}
export default Home ;
