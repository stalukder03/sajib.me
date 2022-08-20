import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import SharedSidebarLayout from './components/SharedSidebarLayout'
import SharedFullWidthLayout from './components/SharedFullWidthLayout'
import Loading from './components/Loading'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import MyCv from './pages/MyCv'
import Contact from './pages/Contact'
import Error from './pages/Error' 

const App = () => {
    const {isLoading,isError} = useGlobalContext();

    if( isLoading ){
        return <Loading/>
    }

    if( isError ){
        return 'Error happend'
    }
    

    return (
        <>
            <Routes>
                <Route path='/' element={<SharedSidebarLayout />} >
                    <Route index element={<Blog />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<Error />} />
                </Route>
                <Route path='/' element={<SharedFullWidthLayout />} >
                    <Route path='portfolio' element={<Portfolio />} />
                    <Route path='my-cv' element={<MyCv />} />
                </Route>
            </Routes>
        </>
    )
}

export default App