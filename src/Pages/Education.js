import React, { Component } from 'react'

export default class Education extends Component {
  render() {
    return (
      <>
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Nagpur University</h3>
                <div className="subheading mb-3">Master in Computer Application</div>
                <div>Computer Applications - Web Development Track</div>
                <p>GPA: 3.23</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">June 2008 - May 2011</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Nagpur University</h3>
                <div className="subheading mb-3">Bachleor in Commerce with Computer Application</div>
                <div>Computer Applications - Web Development Track</div>
                <p>GPA: 3.56</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">June 2005 - May 2008</span></div>
            </div>
          </div>
        </section>
      </>
    )
  }
}
