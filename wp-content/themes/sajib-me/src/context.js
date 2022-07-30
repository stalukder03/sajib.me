import React, { useState, useEffect, useContext } from 'react';

import Api from './services/Api';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [menuItems,setMenuItems] = useState([]);
    const [siteInfo,setSiteInfo] = useState([]);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await Api.get('/data',{});
            setMenuItems(response.data.menu)
            setSiteInfo(response.data.site_info)
            setIsLoading(false)
        } catch ( error){
            setError(true)
            console.log(error)
        }
        setIsLoading(false)
    }
 
    useEffect(() => {
        fetchData();
    }, [])

    return <AppContext.Provider 
        value={{
            isLoading,
            isError,
            siteInfo,
            menuItems
        }}>
            {children}
        </AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};