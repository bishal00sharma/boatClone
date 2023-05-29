import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,Box,
    useDisclosure,Input, Text, Image, Heading, useToast, Flex,
  } from '@chakra-ui/react';
import {AppContext} from "../Context/AppContext";

import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';

import { BsCartCheck} from 'react-icons/bs';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Cart() {
    const [data,setData]=useState([]);
    const [sum , setSum] =useState(0) 
    const navigate = useNavigate();
    const toast = useToast()

  async function getData(){
    let val =localStorage.getItem("userId")
    // console.log(val)
    // val =val.slice(1); 
    // val =val.slice(0, -1);
    let obj ={  "userId" : val }
    
    let dataa = await fetch(`https://zealous-mite-long-underwear.cyclic.app/carts/${val}`, {
        method: 'GET',
        
         headers : {authorization : `bearer ${localStorage.getItem(`token`)}`,"Content-type": "application/json;charset=UTF-8" } 
       })    
       let res= await dataa.json()
    setData(res);
    console.log(res)
    onOpen()
    setSum(res.reduce((accumulator, currentValue) => accumulator + Number(currentValue.product.cost),
    0
   ))
}
  

async function removeItem(data){
  let dataa = await fetch(`https://zealous-mite-long-underwear.cyclic.app/carts/${data._id}`, {
    method: 'DELETE',
    
     headers : {authorization : `bearer ${localStorage.getItem(`token`)}`,"Content-type": "application/json;charset=UTF-8" } 
   }).then(res=> getData())   

   toast({
    title: 'Product deleted.',
    description:  data.product.title+" "+"deleted from your Cart" ,
    status: 'success',
    duration: 1000,
    isClosable: true,
  }) 

}




useEffect(()=>{
    getData()
},[])
    
    const { isOpen, onOpen, onClose } = useDisclosure()
  

  
    return (
      <>
        
          <Button
            onClick={() => getData()}
            key="sm"
            m={4}
            bgColor="red.500"
            color="white"
          > <BsCartCheck /> Cart items</Button>
   
  
        <Drawer onClose={onClose} isOpen={isOpen} size="sm">
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader color="white" bgColor="red">Your Cart Items</DrawerHeader>

            <DrawerBody >
              <Text color="white" bgColor="black" padding="10px 20px">
              Free Shitextping sitewide | Cash On Delivery available for order value upto ₹3000
              </Text>
              <Box>
              {
                data.map((item)=>(
                  <Box>
                   <Box display="flex">
                     <Image width="180px" src={item.product.img} />
                     <Box>
                      <Text>{item.product.title}</Text>
                      <Text>Price : ₹ {item.product.cost}</Text>
                      <Button 
                      onClick={()=> removeItem(item)}
                      >
                        Remove</Button>
                     </Box>
                     
                  </Box>
                 
                 </Box>
                ))
              } 
             
            </Box>
            
            </DrawerBody>
            <Flex m="auto" mb="8">
              <Text fontSize="22" fontWeight="500" color="gray">Total :</Text>
              <Text fontSize="24" fontWeight="600" color="red"> ₹ {sum}</Text>
            </Flex>
            

            <Button> <Link to="/cart">Go to cart</Link> </Button>
          </DrawerContent>
          
        </Drawer>
      </>
    )
  }