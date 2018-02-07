import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist';
import { withPrefix } from 'gatsby-link';
import SimpleIcon from '../components/SimpleIcon'

import 'react-typist/dist/Typist.css'

class IndexPage extends React.Component {
  constructor() {
    super()
    if (typeof window !== `undefined`) {
      if (window.location.pathname === '/') {
        if (navigator.language === 'pt-BR' || navigator.language === 'pt') {
          window.___history.replace('/pt/')
        } else {
          window.___history.replace('/en/')
        }
      }
    }
  }
  trackCta() {
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Click CTA to go to contact page')
    }
  }
  render() {
    const messages = this.props.messages
    if (messages) {
      return (
        <div>
          <section className="py-4 py-md-5">
            <div className="d-flex align-items-end">
              <h1>
                <Typist>
                  {messages.tagline.title}&nbsp;
                  <br className="d-md-none" />
                  {messages.tagline.services.map((service, index) => (
                    <div className="d-inline" key={index}>
                      <strong>{service}</strong>
                      {index === (messages.tagline.services.length - 1) ? null : <Typist.Backspace count={service.length} delay={1000}/>}
                    </div>
                  ))}
                </Typist>
              </h1>
            </div>
            <Link
              to={`/${this.props.locale}/contact`}
              className="btn btn-primary mt-3"
              style={{fontSize: '1.1rem'}}
              onClick={this.trackCta}
              >{messages.tagline.button}</Link>
          </section>
          <div className="separator"></div>
          <section>
            <div className="row" style={{lineHeight: 2}}>
              {messages.services.map((service, index) => (
                <div className="col-12 col-md-4" key={index}>
                  <h3>{service.emoji}</h3>
                  <h3>{service.title}</h3>
                  {service.description}
                </div>
              ))}
            </div>
          </section>
          <div className="separator"></div>
          <section>
            <h1 className="mb-4">{messages.tech.title}</h1>
            <div className="row" style={{lineHeight: 2}}>
              {messages.tech.technologies.map((technology, index) => (
                <div className="col-12 col-md-2 col-lg-1 mb-4" key={index}>
                  <a href={technology.url}>
                    <img style={{filter: 'invert(100%)'}} src={`https://unpkg.com/simple-icons@latest/icons/${technology.icon}.svg`} width="48" height="48" />
                </a>
              </div>
              ))}
            </div>
          </section>
        </div>
      )
    }
    return (<div/>)
  }
}
export default IndexPage
