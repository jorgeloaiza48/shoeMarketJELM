import { useState, useEffect } from "react";


export const useAllProducts = (url) => {
    
    const [state, setState] = useState({
      dataProducts : null,
      isLoadingProducts : true
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoadingProducts : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataProducts : dataApi ,
            isLoadingProducts : false,
        }))
        .catch(err =>{
            setState({
                dataProducts : null,
                isLoadingProducts : false,
            })
        })
        
    }, [url])

    return {
        dataProducts: state.dataProducts,
        isLoadingProducts: state.isLoadingProducts,

    }

    
}

export default useAllProducts