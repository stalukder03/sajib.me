import React from 'react'

const PortfolioItem = ({data,item}) => {
  // console.log(item)
  // const content = data.description.replace(/sssp/g, '<p>').replace(/essp/g, '</p>').replace(/sssul/g, '<ul>').replace(/essul/g, '</ul>').replace(/sssli/g, '<li>').replace(/essli/g, '</li>');
  const content = data.description.replace(/{p}/g, '<p>').replace(/{pe}/g, '</p>').replace(/{ul}/g, '<ul>').replace(/{ule}/g, '</ul>').replace(/{li}/g, '<li>').replace(/{lie}/g, '</li>');

  return (
      <div className="job">
        <div className="top-hdr">
          <h1>{data.name}</h1>
          <p><i>{data.schedule}</i></p>
          <br /> 
          <div className="intro" dangerouslySetInnerHTML={{__html: content}} />
          
        </div>
        <div className="themes">
          {item && item.map((project,i) => {
            return (
              <div key={i} className="theme" tabIndex={0} aria-describedby="twentytwenty-action twentytwenty-name">
                <a className="url" href={project.demopreview_link} > 
                  <div className="theme-screenshot">
                  <img src={project.thumbnail_url} alt="Smart Addons for Elementor" />
                  </div>
                  <span className="more-details">Details</span>
                  <div className={`theme-author ${(project.marketplace.name === 'WordPress.org') && 'org'}`}><span className="author">{project.marketplace.name}</span></div>
                  <h3 className="theme-name entry-title">{project.title}</h3>
                </a> 
              </div> 
            )
          })}
        </div>
      </div>
  )
}

export default PortfolioItem