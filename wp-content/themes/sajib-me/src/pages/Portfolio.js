import React from 'react'
import Menu from '../components/Menu'

const Portfolio = () => {
  return (
    <div className="wrap"> 
      <div className="job">
        <div className="top-hdr">
          <h1>ThemeBeer</h1>
          <p><i>Jan 2017 – Jun 2021</i></p>
          <br />
          <p>
          I worked as the only developer at ThemeBeer and so far got 10 themes and 1 plugin approved on ThemeForest.net and WordPress.org. My responsibilities were,<br />
          - WordPress Theme Development<br />
          - Managing Support<br />
          - Developing/ Managing company website.<br />
          - Developing plugin for WordPress.org<br />
          - Working with the theme setup and customization task on Envato Studio
          </p>
        </div>
        <div className="themes">
          <div className="theme" tabIndex={0} aria-describedby="twentytwenty-action twentytwenty-name">
            <a className="url" href="https://wordpress.org/plugins/smart-addons-for-elementor/" rel="bookmark" tabIndex={-1}> 
              <div className="theme-screenshot">
              <img src="https://ps.w.org/smart-addons-for-elementor/assets/banner-772x250.png?rev=2214939" alt="Smart Addons for Elementor" />
              </div>
              <span className="more-details">Details</span>
              <div className="theme-author org"><span className="author">WordPress.org</span></div>
              <h3 className="theme-name entry-title">Smart Addons for Elementor - Plugin</h3>
            </a> 
          </div> 
        </div>
        </div>
        <div className="job">
          <div className="top-hdr">
            <h1>DigitalCenturySF</h1>
            <p><i>Jul 2016 – Jul 2017</i></p> 
            <br />
            <p>
            I performed at DigitalCenturySF as the only WordPress Developer (Freelance Based). I've developed themes for both ThemeForest.net and WordPress.org at DigitalCenturySF and got 12 themes and 1 plugin completed and approved. My responsibilities were,<br />
            - WordPress Theme Development <br /> 
            - Managing/ Re-designing their website <br /> 
            - Managing support for ThemeForest.net &amp; WordPress.org themes 
            </p>
          </div>
          <div className="themes">
            <div className="theme" tabIndex={0} aria-describedby="twentytwenty-action twentytwenty-name">
              <a className="url" href="https://wordpress.org/plugins/best-testimonial/" rel="bookmark" tabIndex={-1}> 
                <div className="theme-screenshot">
                <img src="https://ps.w.org/best-testimonial/assets/banner-772x250.png?rev=1993115" alt="Chili" />
                </div>
                <span className="more-details">Details</span>
                <div className="theme-author org"><span className="author">WordPress.org</span></div>
                <h3 className="theme-name entry-title">Best Testimonial - Plugin</h3>
              </a> 
            </div> 
          </div>
        </div>
        <div className="job">
          <div className="top-hdr">
            <h1>HasTech</h1>
            <p><i>Apr 2015 – May 2016</i></p>
            <br />
            <p>
            I worked as a WordPress Theme Developer at Hastech and got 6 themes approved on ThemeForest.net. I was the very first WordPress Developer to join the new Hastech team. </p>
          </div>
          <div className="themes">
            <div className="theme" tabIndex={0} aria-describedby="twentytwenty-action twentytwenty-name">
            <a className="url" href="https://themeforest.net/item/express-movers-moving-company-wordpress-theme/12872089" rel="bookmark" tabIndex={-1}> 
                <div className="theme-screenshot">
                <img src="https://themeforest.img.customer.envatousercontent.com/files/189008336/Screenshots/00-Express-Movers-Preview.__large_preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=09311ff1bab33ad4c16de7b1e7b8d6d8" alt="Express Movers" />
                </div>
                <span className="more-details">Details</span>
                <div className="theme-author"><span className="author">ThemeForest.net</span></div>
                <h3 className="theme-name entry-title">Express Movers - Moving Company WordPress Theme</h3>
            </a> 
            </div> 
          </div>
        </div>
    </div>
  )
}

export default Portfolio