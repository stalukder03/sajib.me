import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const validation = (param) => {
    if( !param ){
      console.log(param)
      alert(`${param} can't be empty. Please write your ${param}`)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let name    = form.current.name.value;
    let email   = form.current.email.value;
    let subject = form.current.subject.value;
    let message = form.current.message.value;

    if( name && email && subject && message ){
      document.querySelector('.ajax-loader').classList.add('show');
      emailjs.sendForm('service_m7035xq', 'template_jh30svr', form.current, 'kkv8aCASoSUClT18O')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    }
  }

  return (
    <>
      <article id="post-40" className="post-40 page type-page status-publish hentry">
        <header className="entry-header">
          <h1 className="entry-title">Contact</h1>	
        </header>{/* .entry-header */}
        <div className="entry-content">
          <div className="contact-form">
            <form ref={form} onSubmit={handleSubmit}>
              <p>
                <label> Your name (required)<br />
                  <span>
                    <input type="text" name="name" size={40}/>
                  </span>
                </label>
              </p>
              <p>
                <label> Your email (required)<br />
                  <span>
                    <input type="email" name="email" size={40}/>
                  </span>
                </label>
              </p>
              <p>
                <label> Subject (required)<br />
                  <span>
                    <input type="text" name="subject" size={40}/>
                  </span>
                </label>
              </p>
              <p>
                <label> Your message (optional)<br />
                  <span>
                    <textarea name="message" cols={40} rows={7}/></span>
                </label>
              </p>
              <p>
                <input type="submit" value="Submit"/>
                <span className="ajax-loader"></span>
              </p>
            </form>
          </div>
        </div>{/* .entry-content */}
      </article>
    </>
  )
}

export default Contact