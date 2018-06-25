import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { IntlProvider, addLocaleData, FormattedMessage } from 'react-intl'

import en from 'react-intl/locale-data/en'
import pt from 'react-intl/locale-data/pt'

import '../assets/styles/main.scss'

import messages from './messages'

import twitterLogo from '../assets/img/social/twitter.svg'
import githubLogo from '../assets/img/social/github.svg'
import linkedinLogo from '../assets/img/social/linkedin.svg'


addLocaleData([...en, ...pt,])

const TemplateWrapper = ({ children }) => {
  const locale = typeof window == `undefined` ? 'en' : window.location.pathname.split('/')[1]
  const defaultLocale = 'en'
  return (
    <IntlProvider locale={locale} defaultLocale="en" messages={messages}>
      <div className="d-flex flex-column" style={{minHeight: '100vh'}}>
        <Helmet
          htmlAttributes={{
            lang: locale || defaultLocale
          }}
          title={messages[locale || defaultLocale].meta.title}
          meta={[
            { name: 'description', content: messages[locale || defaultLocale].meta.description },
            { name: 'keywords', content: 'machine learning, mohsin baig, tensorflow, nlp' },
          ]}>
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/manifest.json" />
            <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#212121" />
            <meta name="theme-color" content="#ffffff" />
          </Helmet>
          <header>
            <div className="container py-4 py-md-5">
              <div className="d-flex align-items-center">
                <Link to={`/${locale}/`}><h3 className="mb-0" style={{color: 'white'}}>mohsinbaig.com</h3><small className="text-muted">product and data nerd</small></Link>
                <nav style={{flex: 1}}>
                  <ul className="d-flex justify-content-end list-unstyled m-0 p-0">
                    <li><Link to={`/${locale}/projects`}>{messages[locale || defaultLocale].nav.projects}</Link></li>
                    {/* <li><Link to={`/${locale}/contact`}>{messages[locale || defaultLocale].nav.contact}</Link></li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </header>
          <div className="container" style={{flex: 1}}>
            <main>
              {children()}
            </main>
          </div>
          <footer className="py-3">
            <div className="container">
              <div className="separator"></div>
              <ul className="row" style={{padding: 0, listStyleType: 'none'}}>
                <li className="col" style={{flex: 0}}><a href="https://github.com/moebg"><img src={githubLogo} alt="" height="18"/></a></li>
                <li className="col" style={{flex: 0}}><a href="https://linkedin.com/in/moebg"><img src={linkedinLogo} alt="" height="18"/></a></li>
                <li className="col" style={{flex: 0}}><a href="https://twitter.com/moebgl"><img src={twitterLogo} alt="" height="18"/></a></li>
              </ul>
              <p className="mb-0">mbaig44@illinois.edu</p>
            </div>
          </footer>
        </div>
      </IntlProvider>
    )}

    TemplateWrapper.propTypes = {
      children: PropTypes.func,
    }

    export default TemplateWrapper
