import React, { Component } from 'react'

export default class Skill extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="skills">
                <div className="resume-section-content">
                    <h2 className="mb-5">Skills</h2>
                    <div className="subheading mb-3">Programming Languages &amp; Tools</div>
                    <ul className="list-inline dev-icons">
                        <li className="list-inline-item"><i className="fab fa-html5" /></li>
                        <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
                        <li className="list-inline-item"><i className="fab fa-microsoft" /></li>
                        <li className="list-inline-item"><i className="fab fa-react" /></li>
                        <li className="list-inline-item"><i className="fab fa-node-js" /></li>
                    </ul>
                    <ul>
                        <li>
                            <b>Internet Technologies : </b>
                            .Net Framework, ASP.Net Web Form, ASP.Net MVC, ASP.Net Core MVC, MicroServices, WCF
                        </li>
                        <li>
                            <b>Programming Language : </b>
                             C# Language, SQL, T-SQL 
                        </li>
                        <li>
                            <b>Distributed technologies : </b>
                             WCF, Web API
                        </li>
                        <li>
                            <b>Databases : </b>
                             SQL Server,  Oracle
                        </li>
                        <li>
                            <b>Database Access technologies : </b>
                             Ado.net, Entity Framework, LINQ
                        </li>
                        <li>
                            <b>UI technologies : </b>
                             html5, ReactJs, Redux, Jquery, Swagger, Strapi
                        </li>
                        <li>
                            <b>IDE : </b>
                             Visual Studio (2012 to 2022), Visual Studio Code
                        </li>
                        <li>
                            <b>version Control: </b>
                             TFS, GitHub, Azure DevOps
                        </li>
                        <li>
                            <b>Others : </b>
                             Azure, Octopus Deployments, Unit Testing, Teamcity
                        </li>
                    </ul>
                    <div className="subheading mb-3">Workflow</div>
                    <ul className="fa-ul mb-0">
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Web Development & Testing
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Mobile-First, Responsive Design
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Cross Browser Testing &amp; Debugging
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Cross Functional Teams
                        </li>
                        <li>
                            <span className="fa-li"><i className="fas fa-check" /></span>
                            Agile Development &amp; Scrum
                        </li>
                    </ul>
                </div>
        </section>
      </>
    )
  }
}
