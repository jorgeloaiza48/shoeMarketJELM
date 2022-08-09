import { useState, useEffect } from "react";


export const useAllUsers = (url) => {
    
    const [state, setState] = useState({
      dataAll : null,
      isLoadingAll : true
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoadingAll : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataAll : dataApi ,
            isLoadingAll : false,
        }))
        .catch(err =>{
            setState({
                dataAll : null,
                isLoadingAll : false,
            })
        })
        
    }, [url])

    return {
        dataAll: state.dataAll,
        isLoadingAll: state.isLoadingAll,

    }

    
}

export default useAllUsers