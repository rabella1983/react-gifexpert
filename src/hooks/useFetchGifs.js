
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//definicion de mi hooks, es uan funcion que devuelve algo



export const useFetchGifs = ( category ) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async()=>{
    const newImages = await getGifs( category );
    setImages(newImages);
    setIsLoading(false);
  }

  //hoot que se utiliza para condicionar cuando se ejecuta, como esta aki solo la primera vez, si quicieras otras condiciones van dentro del array
  useEffect( () => {   
     getImages(); 

  }, []);

  return {
    images,
    isLoading
  }
    
  // return {
  //   images:[],
  //   isLoading: false
  // }
  
}
