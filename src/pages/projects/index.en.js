import React from 'react'
import Projects from '../projects'

const messages = {
  title: 'Projects'
}

const projects = [
  {
    title: 'RetailBox',
    url: 'https://github.com/moebg/retailbox',
    description: (
      <div>
        <p>RetailBox is an eCommerce Recommender System that uses machine learning to make recommendations</p>
        <p>Recommender systems are extremely important when it comes to providing customers the best user experience, which is why recommender systems are extremely important when it comes building customer-centric products.</p>
      </div>
    )
  },
  // {
  //   title: 'TRIPBY',
  //   url: 'http://tripby.org',
  //   description: (
  //     <div>
  //       <p>TRIPBY is a drug harm reduction project which focuses on providing information about psychoactive drugs.</p>
  //       <p>The live version was developed several years ago on WordPress. Now we are working to launch a new version as a <a href="https://reactjs.org/">React</a> + <a href="https://www.apollographql.com/">Apollo</a> progressive web app which uses <a href="https://www.graph.cool/">Graphcool</a> as the backend.</p>
  //     </div>
  //   )
  // },
  // {
  //   title: 'Corinthians-Guarulhos',
  //   url: 'http://corinthiansguarulhos.com',
  //   description: (
  //     <div>
  //       <p>Volleyball team in São Paulo, Brazil.</p>
  //       <p>In the website, the user can check next matches, current competitions, team members and news articles.</p>
  //       <p>The website is built on <a href="https://www.gatsbyjs.org/">Gatsby</a> and all content is managed through <a href="https://www.contentful.com/">Contentful CMS</a>. Everytime new articles are created or updated, a pipeline is triggered to compile the pages and redeploy the website.</p>
  //       <p>This project was developed together with <a href="http://quartzostudio.com">Quartzo Studio</a> which provided UI/UX guidelines.</p>
  //     </div>
  //   )
  // },
  // {
  //   title: 'Softin Sistemas',
  //   url: 'http://softin.com.br',
  //   description: (
  //     <div>
  //       <p>Software company in Joinville, Brazil.</p>
  //       <p>This is a marketing website to showcase the company's main products and services. It also allows potential customers to request a custom quote through an email form. The form is directly connected to a <a href="https://mailchimp.com">MailChimp</a> mailing list.</p>
  //       <p>In this project I had the pleasure to work with an artist which drew original illustrations and icons that compose the website. Built on<a href="https://www.gatsbyjs.org/">Gatsby</a>.</p>
  //     </div>
  //   )
  // }
]

export default (props) => <Projects messages={messages} projects={projects} />
