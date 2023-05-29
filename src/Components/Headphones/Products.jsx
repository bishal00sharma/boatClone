import { useContext, useEffect, useState } from "react";
import styles from "./Products.module.css";
import {Box,Button,Image, Select, Text, Tooltip, useToast} from "@chakra-ui/react"
import CategoryNavbar from "./CategoryNavbar";
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import {AppContext} from "../Context/AppContext";



export default function Products(){

    const {set,isSet,change,isAuth} =useContext(AppContext);
    

    const [data,setData]=useState([]);
    const [selectsort,setSort]=useState("");
    const toast = useToast()

async function getData(){
    let dataa=await fetch(`https://zealous-mite-long-underwear.cyclic.app/products` , 
    { headers: { authorization: `bearer ${(localStorage.getItem(`token`))}`} })
    let res= await dataa.json()
    setData(res)
    change();
}

async function selectSort(e){
    let dataa=await fetch(`https://zealous-mite-long-underwear.cyclic.app/products/sort/${e.target.value}` , 
    { headers: { authorization: `bearer ${(localStorage.getItem(`token`))}`} })
    let res= await dataa.json()
    setData(res)
    change();
}

  async function add(data){

    if(true){
        console.log((localStorage.getItem("user"))._id,data._id)
        
        let val =localStorage.getItem("userId")
        
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
          })}
}
useEffect(()=>{
    getData()
},[])

    return(
        <Box>
            <Box padding="5px" m="auto" textAlign="center" bgColor="black" color="white">Plug in to festivities with up to 75% OFF!Come sail with BOAT.</Box>
            <CategoryNavbar />
            <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_Catgry-web_7cf20899-eb4a-427f-9a8a-799d7e1c37fa.jpg?v=1634716734" />
             <Box bgColor="black" py="10" >
                <Select  fontSize="18" w="10%" ml="1030px" bg='red.300' borderColor='red'  variant='flushed' placeholder='Filter by price' onChange={selectSort} value={selectsort}>
               <option value="asc" >Low to high</option>
               <option value="desc">High to low</option>
              </Select>
             </Box>

        <div className={styles.mainTopBoxProducts}>
        <div className={styles.mainBoxProductsHeadphones}>
                
                {data.map((item)=>(
              <div key={item.para} className={styles.mainBoxProductsHeadphonesBox}>
                <div>
                    <img  src={item.img} alt="product_page" />
                    <div className={styles.mainBoxProductsHeadphonesInsideBox}>
                        <p className={styles.mainBoxProductsHeadphonesTitle}>{item.title}</p>
                        <p>{item.star}</p>
                        <hr />
                        <div className={styles.mainBoxProductsHeadphonesPriceBox}>
                        <p >₹ {item.cost}</p>
                        <p style={{textDecoration:"line-through"}}>₹ {item.cutcost}</p>
                        </div>
                        <p >{item.save}</p>
                    </div>
                   
                    <button onClick={()=>add(item)} className={styles.mainBoxProductsButton}>Add to Cart</button>
                    <Tooltip hasArrow label='Know more' bg='red.600'>
                        <Text className={styles.showMore}> <Link to={`/singlepage/${item.id}`}>Show more Details</Link> </Text> 
                    </Tooltip>
                </div>
                </div>
            ))}
        </div>
        </div>
       
        </Box>
    )

}