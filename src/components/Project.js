import React, { PropTypes } from 'react'
import tripbyLogo from '../assets/img/logos/tripby.svg'

const projects = [
  {"name": "DATADEVGROUP", "url": "http://www.datadevgroup.com", "logo": tripbyLogo},
]

const Project = (props) => (
  <div className="pb-5">
    <h3>{props.title}</h3>
    <a href={props.url} className="mt-3 d-block">{props.url}</a>
    <img src={props.image} />
    {props.children}
  </div>
)

export default Project
