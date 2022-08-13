import { useState, useEffect } from "react";


export const useOneProduct = (url) => {
    
    const [state, setState] = useState({
      dataProduct : null,
      isLoadingProduct : true
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoadingProduct : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataProduct : dataApi ,
            isLoadingProduct : false,
        }))
        .catch(err =>{
            setState({
                dataProduct : null,
                isLoadingProduct : false,
            })
        })
        
    }, [url])

    return {
        dataProduct: state.dataProduct,
        isLoadingProduct: state.isLoadingProduct,

    }

    
}

export default useOneProduct