import { useState } from "react";



export const AddCategory = ( {onNewCategory }) => {

    const [inputVaue, setInputValue] = useState('');
    const onIputChange = ( {target} ) =>{
        setInputValue( target.value);
    }
    const onSumit = (event) => {
        event.preventDefault();        
        // setCategories( [...categories, inputVaue] );

       
        if(inputVaue.trim().length <= 1){
            alert('no');
        }else{
            // setCategories( categories => [ inputVaue, ...categories] );
            // setInputValue('');
            onNewCategory(inputVaue);
            setInputValue('');
        }
        
    }

  return (
    <form onSubmit={ (event) => onSumit(event) }>
        <input 
            type="text "
            placeholder="Buscar gifs"
            value={ inputVaue }
            onChange={(event)=> onIputChange(event) }
        />
    </form>
  )
}
