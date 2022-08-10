import { useState, useEffect } from "react";


export const useAllUsers = (url) => {
    
    const [state, setState] = useState({
      dataUsers : null,
      isLoadingUsers : true
    });
    
    useEffect(() => {
        setState({
            ...state,
            isLoadingUsers : true,
          });

        fetch(url)
        .then(res => res.json())
        .then(dataApi => setState({
            dataUsers : dataApi ,
            isLoadingUsers : false,
        }))
        .catch(err =>{
            setState({
                dataUsers : null,
                isLoadingUsers : false,
            })
        })
        
    }, [url])

    return {
        dataUsers: state.dataUsers,
        isLoadingUsers: state.isLoadingUsers,

    }

    
}

export default useAllUsers