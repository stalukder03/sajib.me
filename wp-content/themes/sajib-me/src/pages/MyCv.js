import React from 'react'
import {useGlobalContext} from '../context'

const MyCv = () => {
  const {siteInfo,userProfile,myCvData:{personal_information, personal_statement,technology_skills,work_experience,education,socials}} = useGlobalContext();
  return (
    <div className="my-cv-page">
      <section className="personal-information section">
        <div className="container">
          <div className="main-columns">
            <div>
              <h2 className="title">Personal Information</h2>
            </div>
            <div className="uppercase">
              <h2 className="title">{siteInfo?.name}</h2>
            </div>
          </div>
          <div className="main-columns">
            <div>
              <div className="propic" style={{background: `url(${userProfile.attachment_url}) center center`}} />
            </div>
            {personal_information.length && (
              <div>
                <ul>
                  {personal_information.map((info,i)=>{
                    return (
                      <li key={i}>
                        <i className={info.icon} />
                        {info.text}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div className="main-columns">
            <div>
              <h3 className="subtitle uppercase">Personal Statement</h3>
            </div>
            {personal_statement && (
              <div className="satement" dangerouslySetInnerHTML={{__html: personal_statement}} />
            )}
          </div>
        </div>
      </section>
      <section className="personal-skills section">
        <div className="main-columns">
          <div>
            <h2 className="title uppercase">Personal Skills</h2>
          </div>
          <div className="flex-v-center">
            <div className="heading-style" />
          </div>
        </div>
        <div className="main-columns">
          <div>
            <h3 className="subtitle uppercase">Technology Skills</h3>
          </div>
          {technology_skills.length && (
            <div>
              <table>
                <tbody>
                  {technology_skills.map((skill,i) => {
                    return (<tr key={i}>
                      <td>{skill.title}</td>
                      <td>
                        {skill.text}
                      </td>
                    </tr>)
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      <section className="section">
        <div className="main-columns">
          <div>
            <h2 className="title uppercase">Work Experience</h2>
          </div>
          <div className="flex-v-center">
            <div className="heading-style" />
          </div>
        </div>
        {work_experience.length && work_experience.map((work,i)=>{
          return (
            <div key={i} className="main-columns">
              <div>
                <h3 className="subtitle">{work.work_start_end_date}</h3>
              </div>
              <div>
                <p className="bold">{work.position}</p>
                <p className="italic" dangerouslySetInnerHTML={{__html: work.company}} />
                <div className="text-medium" dangerouslySetInnerHTML={{__html: work.details_intro}} />
              </div>
            </div>
          )
        })}
      </section>
      <section className="section">
        <div className="main-columns">
          <div>
            <h2 className="title uppercase">Education</h2>
          </div>
          <div className="flex-v-center">
            <div className="heading-style" />
          </div>
        </div>
        {education.length && education.map((edu,i)=>{
          return (
            <div key={i} className="main-columns">
              <div>
                <h3 className="subtitle">{edu.date_between}</h3>
              </div>
              <div>
                <div className="bold">{edu.degree}</div>
                {edu.college}
              </div>
            </div>
          )
        })}
      </section>
      <section className="section">
        <div className="main-columns">
          <div>
            <h2 className="title uppercase">PROFILE AND LINKS</h2>
          </div>
          <div className="flex-v-center">
            <div className="heading-style" />
          </div>
        </div>
        {socials.length && socials.map((social,i)=>{
          return (
            <div key={i} className="main-columns">
              <div>
                <h3 className="subtitle">{social.platform}</h3>
              </div>
              <div>
                <a href={social.link}>
                  {social.link}
                </a>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default MyCv