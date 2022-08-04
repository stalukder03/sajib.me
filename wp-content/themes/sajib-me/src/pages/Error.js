import React from 'react'
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <>
      {/* <header className="page-header">
        <h1 className="page-title">Oops! That page can’t be found.</h1>
      </header> */}
      <div className="not-found-page">
        <div className="error">
          <div className="number">4</div>
          <div className="illustration">
            <div className="circle" />
            <div className="clip">
              <div className="paper">
                <div className="face">
                  <div className="eyes">
                    <div className="eye eye-left" />
                    <div className="eye eye-right" />
                  </div>
                  <div className="rosyCheeks rosyCheeks-left" />
                  <div className="rosyCheeks rosyCheeks-right" />
                  <div className="mouth" />
                </div>
              </div>
            </div>
          </div>
          <div className="number">4</div>
        </div>
        <div className="text">Oops. The page you're looking for doesn't exist.</div>
        <Link className="button" to="/">Back Home</Link>
      </div>
    </>
  )
}

export default Error