import  Container  from '@mui/material/Container'

import Card from '@mui/material/Card';

import React,{useState,useEffect} from 'react'
import ProductCard from './ProductCard';
import { Pagination } from '@mui/material';

export interface Products{
    id:number,
    title:string,
    description:string,
    price:string,
    rating:string,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images?:string[]
}
const Productpage = () => {
    const[page,setPage]=useState(1);

    
    const[productData,setProductData]=useState<Products[] | []>([])
    const itemsPerPage=10;
    const totalNumberOfPages=Math.ceil(productData.length/itemsPerPage)

    const lastIndex=page*itemsPerPage;
    const fistIndex=lastIndex-itemsPerPage;
    const currentPageData=productData.slice(fistIndex,lastIndex)

    const fetchData=async()=>{
        const data=await fetch('https://dummyjson.com/products')
        const json=await data.json()
        setProductData(json.products);
        console.log("prod====",productData)             
    }

    useEffect(()=>{
        fetchData()
    },[])
    const handlePageChange = (event:React.ChangeEvent<unknown>, newPage:number) => {
        setPage(newPage);
      };
  return (
    <>
   <Container maxWidth="lg" sx={{
    margin:"1rem",
    display:"flex",
    gap:"1rem",
    flexWrap:"wrap"
    
   }}>
    <ProductCard  products={currentPageData}/>

   
   </Container>
   <div style={{
    display:"flex",
    justifyContent:"center"
   }}>
   <Pagination
        count={totalNumberOfPages}
        page={page}
        onChange={handlePageChange}
      />

   </div>
 
   </>
  )
}

export default Productpage