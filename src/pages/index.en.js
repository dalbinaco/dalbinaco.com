import React from 'react'
import IndexPage from './index'

const messages = {
  tagline: {
    title: 'I work with',
    services: [
      'machine learning', 'natural language processing', 'deep learning', "c++", "python"
    ],
    button: `Twitter`
  },
  about: {
    title: 'About',
    description: (
      <div>
        <p className="lead">CS Student @ UIUC. Writing at <a href="https://www.datadevgroup.com">datadevgroup.com</a></p>
        <p>Working on building the products of the future</p>
      </div>
    ),
    tech: 'Tech I like to work with',
  }
}

export default (props) => <IndexPage messages={messages} locale='en'/>
