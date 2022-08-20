import React, {useEffect} from 'react'
import PortfolioItem from '../components/PortfolioItem'
import {useGlobalContext} from '../context'

const Portfolio = () => {
  const {portfolios} = useGlobalContext();
  const all_proejcts = [...new Set(portfolios.map((item) => item.project_type.slug))].reverse();
    // console.log(all_proejcts)
  
  useEffect(()=>{
    document.title = 'Sajib Talukder | Portfolio'
  },[])

  return (
    <div className="wrap"> 
      {all_proejcts && all_proejcts.map(project => {
        const filterdItem = portfolios.filter((item) => item.project_type.slug == project);
        const project_data = filterdItem[0].project_type
        return <PortfolioItem key={project} data ={project_data} item ={filterdItem}/>
      })}
    </div>
  )
}

export default Portfolio