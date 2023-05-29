import { Box, Button, Checkbox, Flex, Image, Input, Link, Select, Text, useToast } from "@chakra-ui/react"
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Product from "./Product";


export default function MainCart(){
    const [carts, setCart] =useState([])
    const toast = useToast()
    const [sum, setSum] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()

    async function getData(){
        let val =localStorage.getItem("userId")
       
        let obj ={  "userId" : val }
        
        let dataa = await fetch(`https://zealous-mite-long-underwear.cyclic.app/carts/${val}`, {
            method: 'GET',
            
             headers : {authorization : `bearer ${(localStorage.getItem(`token`))}`,"Content-type": "application/json;charset=UTF-8" } 
           })    
           let res= await dataa.json()
        setCart(res);
       
        
        
          
          setSum(res.reduce((accumulator, currentValue) => accumulator + (Number(currentValue.product.cost) * Number(currentValue.quantity)),
          0
         ))
         setDiscount(res.reduce((accumulator, currentValue) => accumulator + ( Number(currentValue.quantity) * (Number(currentValue.product.cutcost)-Number(currentValue.product.cost))),
         0
        ))
        setTotal(res.reduce((accumulator, currentValue) => accumulator + (Number(currentValue.product.cutcost) * Number(currentValue.quantity)),
         0
        ))
    }

    async function removeItem(data){
        
        let dataa = await fetch(`https://zealous-mite-long-underwear.cyclic.app/carts/${data._id}`, {
          method: 'DELETE',
          
           headers : {authorization : `bearer ${(localStorage.getItem(`token`))}`,"Content-type": "application/json;charset=UTF-8" } 
         }).then(res=> getData())   
      
         toast({
          title: 'Product deleted.',
          description:  data.product.title+" "+"deleted from your Cart" ,
          status: 'success',
          duration: 1000,
          isClosable: true,
        }) 
        console.log(data)
      }

     
      async function quantityChange(quan,data){
        console.log(data);

            let obj ={ "quantity": quan}
           
            await fetch(`https://zealous-mite-long-underwear.cyclic.app/carts/${data}`, {
                method: 'PATCH',
                headers : {authorization : `bearer ${(localStorage.getItem(`token`))}`,"Content-type": "application/json;charset=UTF-8" } ,
                body:  JSON.stringify(obj)
               })
               toast({
                title: 'Product Added.',
                description:  "added to Cart" ,
                status: 'success',
                duration: 2000,
                isClosable: true,
              })
              getData()
    }
    
  

      

    useEffect(()=> {
        getData()
    },[])
   

    return(
        <Box>
            <Flex w="80%" m="auto" h="40%">
                <Image cursor="pointer" onClick={()=>navigate('/')} w="10%" h="30%" src="/Boat-Logo.png" />
                <Image ml="30" w="45%" src="/bagImg.png"/>
            </Flex>
          
        
        <Box w="80%" m="auto">
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/28032021-D-cartpagebanner-relianceones.jpg" />
           <Button mt="5" colorScheme='blue' onClick={()=>navigate("/headphones")}> {"<-  "}Go Back</Button>
            <Flex justifyContent="space-evenly" mt="10">
                <Box w="80%">
                   
                        
                        {carts&& carts.map((cart)=>(
                            <Product cart={cart} removeItem={removeItem} quantityChange={quantityChange} />
                       ) ) }
                      
                      
                </Box>
                <Box w="25%" p="23">
                 <Text fontWeight="700" my="5">Order Details</Text>
                 <Flex justifyContent="space-between">
                    <Text>Bag total</Text>
                    <Text>₹ {total}</Text>
                 </Flex>
                 <Flex justifyContent="space-between">
                    <Text>Bag discount</Text>
                    <Text>₹ {discount}</Text>
                 </Flex>
               
                <Flex justifyContent="space-between" my="3" >
                    <Box color="gray">Delivery Fee</Box>
                    <Flex>
                    <Box>Free</Box>
                    <Box textDecoration="line-through">₹99</Box>
                    </Flex>
                </Flex> 
                <Flex justifyContent="space-between">
                    <Text fontWeight="700">Total Amount </Text>
                    <Text fontWeight="700">₹{sum}</Text>
                 </Flex>
                 <Button onClick={()=>navigate("/shipping")}  w="full" mt="5" bgColor="orange.400" color="white">Proceed to Shipping</Button>
                <Box border="1px dashed gray" my="10" px="3" pb="5" pt="3" >
                    <Text fontWeight="650">Apply Coupon</Text>
                    <Flex my="5">
                        <Input type="number" placeholder="Enter code here" />
                        <Button>Apply</Button>
                    </Flex>
                    <Text>Applicable Coupons</Text>
                    <Flex my="5">
                        <Checkbox mx="5"></Checkbox>
                        <Flex>
                             <Text fontWeight="600">Savings: </Text>
                             <Text color="orange" ml="3"> ₹296.10</Text>
                        </Flex>
                    </Flex>
                    <Box ml="12">
                        <Text fontFamily="sans-serif">FIRSTBUY</Text>
                         <Text fontSize="13">
                                 Get upto Extra 40% Off on 1499 and Above. Max Discount Rs. 1200.
                         </Text>
                    </Box>

                    <Flex my="5">
                        <Checkbox mx="5"></Checkbox>
                        <Flex>
                             <Text fontWeight="600">Savings: </Text>
                             <Text color="orange" ml="3"> ₹36.10</Text>
                        </Flex>
                    </Flex>
                    <Box ml="12">
                        <Text fontFamily="sans-serif">TRENDS</Text>
                         <Text fontSize="13">
                         Get Up To Extra 25% Off On ₹1490 On Your First Purchase. Max Discount Rs. 2000.                         </Text>
                    </Box>
                    
                    
                </Box>
               
                <Box bgColor="gray.100" p="2" my="5">
                    <Text fontWeight="600" mb="4">
                      Return/Refund policy
                    </Text>
                    <Text fontSize="14">
                      In case of return, we ensure quick refunds. Full amount will be refunded excluding Convenience Fee
                    </Text>
                    {/* <Link target="blank" href="https://www.ajio.com/return-refund-policy" color="blue">Return policy</Link> */}
                </Box>
                </Box>
            </Flex>
        </Box>
        {/* <Image src="/footerImg.png"/>
        <hr />
        <Image src="/secondFooter.png" /> */}
        </Box>
    )
} 