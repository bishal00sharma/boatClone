import { Box, Grid, Image,Text, useToast } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./Categories.module.css"
import React from 'react'
const Categories = () => { 
  const navigate = useNavigate();
  const toast = useToast()

  function headphonePage(){
    if(localStorage.getItem("token")){
      navigate("/headphones")
    }
    else{
      toast({
        title: 'Login first',
        description: "You need to login first.",
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
     
      {window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}
   
  }
  return (
    <Box mt="20">
   <Box w="90%" color="red" letterSpacing={2} fontWeight="700" m="auto" fontSize={35} textAlign="center" bgColor="teal.100" _hover={{fontSize:"40"}} >Categories</Box>
    
    <Grid className={styles.mainBoxCategories} width="80%" templateColumns='repeat(7, 1fr)' gap={30}>
        <Box className={styles.mainBoxCategory} cursor="pointer" onClick={headphonePage}><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_e149ff17-7bd5-45c8-81db-668b35a9c682_150x.png?v=1662980071"/><Text className={styles.innerTextBox} cursor="pointer" >Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Untitled-1_new_150x.png?v=1663305252"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_new_150x.png?v=1663305235"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_new_150x.png?v=1663305091"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_ea55ea05-113b-4ca2-b415-736c2739cc59_150x.png?v=1662976773"/><Text className={styles.innerTextBox}> Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_481c8210-c7cf-48af-b767-ad5529e5e1f9_150x.png?v=1663838944"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_57157db1-8a35-4db2-97ad-69cb09db3097_150x.png?v=1663838502"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/smartwatches_new_ee36456a-ebda-49f9-9c08-b681ec622b02_150x.png?v=1663838446"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_bd8976ab-837d-454a-8e12-53b3c38d79f2_150x.png?v=1663838883"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_new_150x.png?v=1663305202"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_150x.png?v=1662980890"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_150x.png?v=1662980928"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
        <Box><Image className={styles.innerImageCategories} src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_new_150x.png?v=1663305091"/><Text className={styles.innerTextBox}>Headphones</Text></Box>
    </Grid>
    </Box>
  )
}
export default Categories ;