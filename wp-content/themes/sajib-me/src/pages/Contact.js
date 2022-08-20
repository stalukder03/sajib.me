import React, { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const submitBtn = useRef()
  const [data,setData] = useState({subject:'', name:'', email:'', message:''})
  const [error,setError] = useState({subject:false, name:false, email:false, message:false})
  const [msg,setMsg] = useState({type:'',text:''})
  const [loading,setLoading] = useState(false)

  const handleOnChange = e => {
    setData({...data,[e.target.name]:e.target.value})
    setError({...error,[e.target.name]:(e.target.value != '') && false})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    submitBtn.current.setAttribute('disabled','')
    if( data.name && data.email && data.subject && data.message ){
      emailjs.send('service_m7035xq', 'template_jh30svr', data, 'kkv8aCASoSUClT18O')
        .then((result) => {
          if( result.text === 'OK' ){
            setData({subject:'', name:'', email:'', message:''})
            setLoading(false)
            setMsg({type:'success',text:'Email sent successfully.'})
            setTimeout(()=>{
              setMsg({type:'',text:''})
              submitBtn.current.removeAttribute('disabled')
            },1500)
          }else{
            setMsg({type:'failed',text:'Something went wrong, please try again.'})
            setTimeout(()=>{
              setMsg({type:'',text:''})
              submitBtn.current.removeAttribute('disabled')
            },1500)
          }
        }, (error) => {
          setMsg({type:'failed',text:'Something went wrong, please try again.'})
          setTimeout(()=>{
            setMsg({type:'',text:''})
            submitBtn.current.removeAttribute('disabled')
          },1500)
          console.log(error.text);
        });
    }else{
      setError({...error,
        name:((data.name=='') && true),
        email:((data.email=='') && true),
        subject:((data.subject=='') && true),
        message:((data.message=='') && true)
      })
      setLoading(false)
      submitBtn.current.removeAttribute('disabled')
    }
  }

  useEffect(()=>{
    document.title = 'Sajib Talukder | Contact'
  },[])

  return (
    <>
      <article id="post-40" className="post-40 page type-page status-publish hentry">
        <header className="entry-header">
          <h1 className="entry-title">Contact</h1>	
        </header>{/* .entry-header */}
        <div className="entry-content">
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
              <p>
                <label> Your name (required)<br />
                  <span>
                    <input type="text" name="name" size={40} onChange={handleOnChange} value={data.name}/>
                  </span>
                  {error.name && <span className="error-msg">Name can't be empty.</span>}
                </label>
              </p>
              <p>
                <label> Your email (required)<br />
                  <span>
                    <input type="email" name="email" size={40} onChange={handleOnChange} value={data.email}/>
                  </span>
                  {error.email && <span className="error-msg">Email can't be empty.</span>}
                </label>
              </p>
              <p>
                <label> Subject (required)<br />
                  <span>
                    <input type="text" name="subject" size={40} onChange={handleOnChange} value={data.subject}/>
                  </span>
                  {error.subject && <span className="error-msg">Subject can't be empty.</span>}
                </label>
              </p>
              <p>
                <label> Your message (optional)<br />
                  <span>
                    <textarea name="message" cols={40} rows={7} onChange={handleOnChange} value={data.message}> </textarea>
                  </span>
                  {error.message && <span className="error-msg">Message can't be empty.</span>}
                </label>
              </p>
              <p>
                <input ref={submitBtn} type="submit" value="Submit"/>
                {loading && <span className="ajax-loader"></span>}
              </p>
              {msg && <p id="msg" className={msg.type}>{msg.text}</p>}
              
            </form>
          </div>
        </div>{/* .entry-content */}
      </article>
    </>
  )
}

export default Contact