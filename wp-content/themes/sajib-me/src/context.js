import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Api from './services/Api';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
    const {pathname} = useLocation()
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);
    const [menuItems,setMenuItems] = useState([]);
    const [siteInfo,setSiteInfo] = useState([]);
    const [userProfile,setUserProfile] = useState([]);
    const [blogPosts,setBlogPosts] = useState([]);
    const [portfolios,setPortfolios] = useState([]);
    const [myCvData,setMyCvData] = useState([]);

    const fetchData = async () => {
        setIsLoading(true)
        try {
            const response = await Api.get('/data',{});
            setMenuItems(response.data.menu)
            setSiteInfo(response.data.site_info)
            setUserProfile(response.data.user_profile)
            setBlogPosts(response.data.posts_list)
            setPortfolios(response.data.portfolio_list)
            setMyCvData(response.data.my_cv_data)
            // console.log(response.data)
            setIsLoading(false)
        } catch ( error){
            setIsError(true)
            console.log(error)
        }
        setIsLoading(false)
    }
 
    
    useEffect(() => {
        fetchData();
    }, [])

    useEffect(()=>{
        if(pathname.includes('my-cv')){
            document.body.classList.add('my-cv')
        }else{
            document.body.classList.remove('my-cv')
        }
    },[pathname])

    return <AppContext.Provider 
        value={{
            isLoading,
            isError,
            siteInfo,
            userProfile,
            menuItems,
            blogPosts,
            portfolios,
            myCvData
        }}>
            {children}
        </AppContext.Provider>;
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider};