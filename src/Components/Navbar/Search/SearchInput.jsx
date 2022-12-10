import React from 'react'
import styles from "./SearchInput.module.css";
import Input from './Input';
import { Box, Image, Text } from '@chakra-ui/react';


export default function SearchInput(){
  return (
    <div className={styles.SearchBox}>
        
        <Box>
           <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x_200x_f9c79bf9-9c9a-477d-ab6a-7c889a1f2f70_170x.png?v=1646731229" alt="boat_logo" />
        </Box>
        <Box>
             <Text>Category</Text>
            <Text>Daily Deals</Text>
            <Text>Offer Zone</Text>
            <Text> More </Text>
        </Box>
        <Input />
     </div>
        
  )
}
