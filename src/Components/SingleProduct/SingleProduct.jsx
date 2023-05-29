import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    useToast,
  } from '@chakra-ui/react';
import axios from "axios"
import { useEffect, useState } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import {AiOutlineArrowLeft} from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import Cart from '../Cart/Cart';
  
  export default function SingleProduct() {
    const [data, setData] = useState({});
    const params = useParams();
    const toast = useToast()
    const { id } = params;
 console.log(id)

function getData(){
    axios.get(`https://zealous-mite-long-underwear.cyclic.app/products/${id}`, { headers : {authorization : `bearer ${(localStorage.getItem("token"))}`}}).then((res)=>setData(res.data[0]))
}
async function add(data){

  if(true){
      console.log((localStorage.getItem("user"))._id,data._id)
      
      let val =localStorage.getItem("userId")
      val =val.slice(1); 
      val =val.slice(0, -1);
      let obj ={ "productId": data._id , "userId" : val }
     
      await fetch('https://zealous-mite-long-underwear.cyclic.app/carts', {
          method: 'POST',
          headers : {authorization : `bearer ${(localStorage.getItem(`token`))}`,"Content-type": "application/json;charset=UTF-8" } ,
          body:  JSON.stringify(obj)
         })
         toast({
          title: 'Product Added.',
          description:  data.title+" "+"added to Cart" ,
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
}
}

   console.log(data)
useEffect(()=>{
  getData();
},[id])
 
    return (
     
      <Container maxW={'7xl'}>
        <Flex justifyContent="space-between">
          <Button color="blue"> <AiOutlineArrowLeft /> <Link to="/headphones"> Go Back</Link></Button>
          <Cart />
        </Flex>
        
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src=
                {data.img}
              
              // fit={'cover'}
              align={'center'}
              w={'90%'}
              h={{ base: '80%', sm: '500px', lg: '500px' }}
              // m={{ base: '0', sm: '1000px 0px 0px 0px', lg: '0',xl: '0', }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
               {data.title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                ₹ {data.cost}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  Earbuds for Women With upto 12 Hours playback time, 13mm drivers, IWP Technology, 650mah Carry Case with Type C Charging
                </Text>
             
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Bluetooth version</ListItem>
                    <ListItem>Playback</ListItem>{' '}
                    <ListItem>Case Indicator</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>Optimum Bluetooth V5.0.</ListItem>
                    <ListItem>Up to 14H Total Playback</ListItem>
                    <ListItem>LED Case Battery Indicator</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Rating
                    </Text>{' '}
                    {data.star}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Backup
                    </Text>{' '}
                    12 Hours playback
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bluetooth
                    </Text>{' '}
                    Version 5.0
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    5 cm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      TYpe:
                    </Text>{' '}
                    Lightweight Ergonomic Earbuds
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      ANC:
                    </Text>{' '}
                     Yes
                  </ListItem>
                </List>
              </Box>
            </Stack>
  
            <Button
            onClick={()=>add(data)}
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }