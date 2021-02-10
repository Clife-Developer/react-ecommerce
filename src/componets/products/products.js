import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './product/product'
import useStyles from './styles'
const products=[
    {id:1,name:"Shoes",description:"Running Shoes",
    price:'$10',image:"https://tse1.mm.bing.net/th?id=OIP.ICR9uv_p2pxsuV-xRo8k1AHaHa&pid=Api&P=0&w=300&h=300"},
    {id:2,name:"Macbook",description:"Apple Macbook",
    price:"$50",image:"https://images.techhive.com/images/article/2014/12/macbook_air-100538062-large.jpg"}
]
const Products=()=>{
    const classes=useStyles();
    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
             <Grid container justify="center" spacing={4}>
               {products.map(product=>{
                 return(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                     <Product product={product}/>
               </Grid> 
             )})}
        </Grid>
    </main>
   )
}

export default Products
