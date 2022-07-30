import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import Sidebar from './components/Sidebar'
import Blog from './pages/Blog'
import Portfolio from './pages/Portfolio'
import MyCv from './pages/MyCv'
import Contact from './pages/Contact'
import Error from './pages/Error'

const App = () => {
    const {pathname} = useLocation()
    const {isLoading,isError} = useGlobalContext();
    

    useEffect(() => {
        document.body.id = '';
        if( pathname === '/portfolio' ){
            document.body.id = 'no-sidebar';
        }
    },[pathname])

    if( isLoading ){
        return 'Loading...'
    }

    if( isError ){
        return 'Error happend'
    }

    if( pathname === '/portfolio' ){
        return <Portfolio/>
    }

    return (
        <>
            <div className="site">
                <Sidebar/>

                <div id="content" className="site-content ">
                    <main id="main" className="site-main" role="main">

                        <Routes>
                            <Route path='/' element={<Blog />} />
                            <Route path='portfolio' element={<Portfolio />} />
                            <Route path='my-cv' element={<MyCv />} />
                            <Route path='contact' element={<Contact />} />
                            <Route path='*' element={<Error />} />
                        </Routes>

                    </main>
                </div>


            </div>
        </>
    )
}

export default App