import { Box, Button, Checkbox, Flex, Image, Input, Link, Select, Text, useToast } from "@chakra-ui/react"
import { useState } from "react"


export default function Product({  cart,removeItem, quantityChange}){
    const [quantity, setQuantity] = useState(1)


    return(
        <Box>
             <Flex key={cart.product._id} p="3" boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px" justifyContent="space-evenly">
                                <Image src={cart.product.img} w="15%" />
                                 <Text fontSize="16" pt="10">{cart.product.title}</Text>
                                 <Flex pt="30" justifyContent="space-evenly">
                                    <Select placeholder='size'>
                                       <option value='option3'>S</option>
                                        <option value='option1'>M</option>
                                        <option value='option2'>L</option>
                                        
                                    </Select>
                                    <Select placeholder='qty' ml="2" value={cart.quantity} onChange={(e)=>{ setQuantity(Number(e.target.value)) ; quantityChange( Number(e.target.value) ,cart._id)}}>
                                       <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                        <option value='6'>6</option>
                                        <option value='7'>7</option>
                                        <option value='8'>8</option>
                                        <option value='9'>9</option>
                                        <option value='10'>10</option>
                                    </Select>
                                 </Flex>
                                 <Box pt="5">
                                    <Box color="green">Savings:  ₹{cart.product.cutcost-cart.product.cost}</Box>
                                    <Flex>
                                         <Box textDecoration="line-through">{cart.product.cutcost}</Box>
                                         <Box px="4" py="1" bgColor="teal.100" borderLeft="6px solid teal" fontWeight="600" fontSize="18" ml="3"> ₹ {cart.product.cost}</Box> 
                                     </Flex>
                                    <Button onClick={()=> removeItem(cart)} mt="6" ml="20" color="blue.400">DELETE</Button>
                                   </Box>
                            </Flex>
                        
        </Box>
    )
}