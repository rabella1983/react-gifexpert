import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ( {category} ) => {    

  //creando nuestros propio hook
  const { images, isLoading} = useFetchGifs( category );
  // console.log( {isLoading});
/*
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  const getImages = async()=>{
    const newImages = await getGifs ( category );
    setImages(newImages);
  }

  //hoot que se utiliza para condicionar cuando se ejecuta, como esta aki solo la primera vez, si quicieras otras condiciones van dentro del array
  useEffect( () => {
   // getGifs(category);
     getImages();
  //  setIsLoading(false);

  }, [])

  */
    

  return (
    <>
        <h3> {category } </h3>
        {
          isLoading && ( <h2>Cargando...</h2>)
          // isLoading
          // ? ( <h2>Cargando...</h2>)
          // :null
        }
       
        <div className="card-grid">
          {
            // images.map( image=> (
            //   <li key={image.id} > { image.title} </li>
            // ))
            images.map( (image )=> (
              <GifItem 
              key={ image.id } 
              { ...image }//envia todas las propiedades del objeto
              />
              // <li key={id} > { title} </li>
            ))
          }
        </div>
    </>
  )
}
