import React, { Component } from 'react'

export default class Strength extends Component {
  render() {
    return (
        <section className="resume-section" id="strength">
           <div className="resume-section-content">
                    <h2 className="mb-5">Strength</h2>
                    <div className="subheading mb-3"></div>
                    <ul>
                        <li>
                            <b>Problem Solving : </b>
                            Developed solutions for complex problems resulting in a 30% increase in efficiency
                        </li>
                        <li>
                            <b>Teamwork: </b>
                            Collaborated with cross-functional teams resulting in successful project completion within deadline
                        </li>
                        <li>
                            <b>Attention to Detail : </b>
                            Implemented rigorous testing methodologies resulting in 99% bug-free code
                        </li>
                    </ul>
                </div>
        </section>
    )
  }
}
