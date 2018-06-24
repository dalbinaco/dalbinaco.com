import React from 'react'
import Link from 'gatsby-link'
import Typist from 'react-typist';
import { withPrefix } from 'gatsby-link';
import Badges from '../components/Badges'

import SimpleIcon from '../components/SimpleIcon'

import 'react-typist/dist/Typist.css'

class IndexPage extends React.Component {
  constructor() {
    super()
  }
  trackCta() {
    if (typeof window !== 'undefined' && window.ga) {
      window.ga('send', 'event', 'Contact', 'Click CTA to go to contact page')
    }
  }

  componentDidMount() {
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
          <div>
            <h2>{messages.about.title}</h2>
            <section className="mb-3">
              {messages.about.description}
            </section>
            <h3>{messages.about.tech}</h3>
            <Badges skills={[
              {
                icon: 'python',
                name: 'Python',
                url: 'https://reactjs.org/',
                color: '#61DAFB'
              },
              {
                icon: 'react',
                name: 'React',
                url: 'https://redux.js.org/',
                color: '#61DAFB'
              },
              {
                icon: 'nodejs',
                name: 'Node.js',
                url: 'https://nodejs.org/',
                color: '#61DAFB'
              },
              {
                icon: 'nodejs',
                name: 'Node.js',
                url: 'https://nodejs.org/',
                color: '#61DAFB'
              },
              {
                icon: 'sass',
                name: 'Sass',
                url: 'https://sass-lang.com/',
                color: '#61DAFB'
              },
              {
                icon: 'python',
                name: 'Python',
                url: 'https://gatsbyjs.org/',
                color: '#61DAFB'
              },
              {
                icon: 'mysql',
                name: 'SQL',
                url: 'https://graphql.org/',
                color: '#61DAFB'
              },
            ]} />
          </div>
        </div>
      )
    }
    return (<div/>)
  }
}
export default IndexPage
