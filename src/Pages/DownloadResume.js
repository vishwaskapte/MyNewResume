import React from 'react'
import resume from './VishwasKapte.pdf'

export default function DownloadResume() {
  return (
    <a className="social-icon" href= {resume} target="_blank" data-toggle="tooltip" data-placement="top" title="Open Resume in PDF Format" ><i className="fa fa-cloud-download" /></a>
  )
}
