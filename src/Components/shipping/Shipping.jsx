import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { GoLocation } from 'react-icons/go';
import { BsBoxSeam } from 'react-icons/bs';
import Address from "./Address";
import { useEffect, useState } from "react";
import axios from "axios";
import CarouselItem from "react-bootstrap/esm/CarouselItem";



export default function Shipping(){
  const [carts,setCart] = useState([])
  const [sum, setSum] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [total, setTotal] = useState(0)
  
  async function getData(){
    let val =localStorage.getItem("userId")
    console.log(val)
    val =val.slice(1); 
    val =val.slice(0, -1);
    let obj ={  "userId" : val }
    
    let dataa = await fetch(`http://localhost:8080/carts/${val}`, {
        method: 'GET',
        
         headers : {authorization : `bearer ${JSON.parse(localStorage.getItem(`token`))}`,"Content-type": "application/json;charset=UTF-8" } 
       })    
       let res= await dataa.json()
    setCart(res);
    console.log(res)

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

const loadScript = (src) => {
  return new Promise((resovle) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => {
      resovle(true);
    };

    script.onerror = () => {
      resovle(false);
    };

    document.body.appendChild(script);
  });
};

const displayRazorpay = async (amount) => {
  const res = await loadScript(
    "https://checkout.razorpay.com/v1/checkout.js"
  );

  if (!res) {
    alert("You are offline... Failed to load Razorpay SDK");
    return;
  }

  const options = {
    key: "rzp_test_hKJK0hoBo6mCYQ",
    currency: "INR",
    amount: amount * 100,
    name: "Bishal Boat",
    description: "Thanks for purchasing",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Boat_Logo.webp",

    handler: function (response) {
      alert(response.razorpay_payment_id);
      alert("Payment Successfully");
    },
    prefill: {
      name: "Bishal Boat",
    },
  }
  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};


  useEffect(() => {
   getData()
  }, []);

    return (
      <Box>
        
         <Flex h="30%" w="80%" m="auto">
                <Image w="10%" h="10%" src="/Boat-Logo.png" />
                <Image ml="30" w="40%" src="/deliveryImg.png"/>
            </Flex>
        <Flex justifyContent="space-evenly" w="80%" m="auto" mb="20" mt="20">
            <hr p="10" />
           <Box w="65%">
             <Flex>
              <GoLocation fontSize="30" />
              <Box>
                <Text p="1" fontWeight="650" fontSize="20">Delivery Address</Text>
                <Text>We will deliver your order to this address</Text>
              </Box>
            </Flex>
            <Address />
           </Box>
           <Box w="25%" border="1px dashed gray" px="5" py="2">
                 <Text fontWeight="700" my="2">Order Details</Text>
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
                    <Box textDecoration="line-through">₹99.00</Box>
                    </Flex>
                </Flex> 
                <Flex justifyContent="space-between">
                    <Text fontWeight="700">Total Amount</Text>
                    <Text fontWeight="700">₹ {sum}</Text>
                 </Flex>
                 <Button onClick={()=>displayRazorpay(sum)} w="full" mt="5" bgColor="orange.400" color="white">Proceed to Payment</Button>
                 </Box>
        </Flex>
        <hr />
        <Box w="50%" ml="60" mt="10">
          <Flex>
            <Text fontSize="33" mt="1" mr="5">
              <BsBoxSeam />
            </Text>
            <Text fontSize="25" mb="10">  Your items</Text>
          </Flex>
          
        <SimpleGrid columns={3} spacing={5}>
          {carts.map((cart)=>(
             <Flex>
              <Image w="20" src={cart.product.img} />
              <Box>
                <Text ml="3" fontSize="16" color="teal">{cart.product.title} </Text>
                {/* <Text color="orange" ml="3">{cart.product.brand} </Text> */}
                <Text fontSize="14" ml="3">Delivery expected 29 Nov</Text>
              </Box>
              
            </Flex>
          ))}
        
           
      
          </SimpleGrid>
        </Box>
        {/* <Image mt="20" src="/footerImg.png" alt="footerImg"/> */}
        </Box>
    )
}