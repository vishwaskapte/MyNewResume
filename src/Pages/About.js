import React from 'react'
import DownloadResume from './DownloadResume'

export default function About() {
  return (
    <>
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Vishwas V. 
              <span className="text-primary">Kapte</span>
            </h1>
            <div className="subheading mb-5">
              KVille F-1107, Kiwale, Pune, Maharashtra, India  (+91) 9561153397  &nbsp; 
              <a href="mailto:vishwasvkapte@outlook.com">vishwasvkapte@outlook.com</a>
            </div>
            <p className="lead mb-5">I am looking for an opportunity to join an organization where I can use my skills and knowledge to contribute as a team member towards the company's growth. I am seeking challenging assignments in the Information Technology industry with a reputable organization that matches my analytical and technical abilities and provides opportunities for personal and professional growth.</p>
            <div className="social-icons">
              <a className="social-icon" target='_blank' href="https://www.linkedin.com/in/vishwas-kapte-47535621/" data-toggle="tooltip" data-placement="top" title="Open Linekedin Profile"><i className="fab fa-linkedin-in" /></a>
              <a className="social-icon" target='_blank' href="https://github.com/vishwaskapte" data-toggle="tooltip" data-placement="top" title="Open GitHub Profile"><i className="fab fa-github" /></a>
              <a className="social-icon" href="#!" data-toggle="tooltip" data-placement="top" title="Open Twitter Profile"><i className="fab fa-twitter" /></a>
              <a className="social-icon" href="#!" data-toggle="tooltip" data-placement="top" title="Open Facebook Profile" ><i className="fab fa-facebook-f" /></a>
              <DownloadResume />
            </div>
          </div>
        </section>
    </>
  )
}
