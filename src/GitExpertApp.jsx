import { useState } from "react"
// import { AddCategory } from "./components/AddCategory";
// import { GifGrid } from "./components/GifGrid";
import { AddCategory, GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
   
    const onAddCategory = ( newCategory ) => {
       
        if( categories.includes(newCategory) ){
            alert('ya existe la categoria que quiere agregar');
        }else{
            // setCategories( [...categories, newCategory ] );
            setCategories( [newCategory, ...categories ] );
        }
        
     // setCategories ( cat => [ ...cat, 'Raul Abella']);

    }

  return (
    <>
        <h1>GitExpertApp</h1>

    
        <AddCategory 
            onNewCategory = { (value)=> onAddCategory(value)}      
        />
        
  
            { 
            categories.map( (category) => (
                    <GifGrid key={ category } category={ category } />              
                ))
            }
            
            
       
    </>
  )
}
