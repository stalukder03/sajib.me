import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_m7035xq', 'template_jh30svr', form.current, 'kkv8aCASoSUClT18O')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <article id="post-40" className="post-40 page type-page status-publish hentry">
        <header className="entry-header">
          <h1 className="entry-title">Contact</h1>	
        </header>{/* .entry-header */}
        <div className="entry-content">
          <div className="wpcf7" id="wpcf7-f39-p40-o1" lang="en-US" dir="ltr">
            <form ref={form} className="wpcf7-form init" onSubmit={handleSubmit}>
              <p>
                <label> Your name (required)<br />
                  <span className="wpcf7-form-control-wrap your-name">
                    <input type="text" name="name" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" />
                  </span>
                </label>
              </p>
              <p>
                <label> Your email (required)<br />
                  <span className="wpcf7-form-control-wrap your-email">
                    <input type="email" name="email" size={40} className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email" />
                  </span>
                </label>
              </p>
              <p>
                <label> Subject (required)<br />
                  <span className="wpcf7-form-control-wrap your-subject"><input type="text" name="subject" size={40} className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required" />
                  </span>
                </label>
              </p>
              <p>
                <label> Your message (optional)<br />
                  <span className="wpcf7-form-control-wrap your-message"><textarea name="message" cols={40} rows={10} className="wpcf7-form-control wpcf7-textarea" /></span>
                </label>
              </p>
              <p><input type="submit" value="Submit" className="wpcf7-form-control wpcf7-submit" /></p>
            </form>
          </div>
        </div>{/* .entry-content */}
      </article>
    </>
  )
}

export default Contact