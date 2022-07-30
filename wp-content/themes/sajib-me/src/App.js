import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect} from 'react'
import {useGlobalContext} from './context'
import Sidebar from './components/Sidebar'
import Blog from './components/Blog'
import Portfolio from './components/Portfolio'
import MyCv from './components/MyCv'
import Contact from './components/Contact'
import Error from './components/Error'

const App = () => {
    const {isLoading,isError} = useGlobalContext();
    
    if( isLoading ){
        return 'Loading...'
    }

    if( isError ){
        return 'Error happend'
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