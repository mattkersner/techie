'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Technologies', [
      {
        name: 'HTML',
        description: 'HTML (HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage. Other technologies besides HTML are generally used to describe a webpage\'s appearance/presentation (CSS) or functionality (JavaScript).\"HyperText\" refers to links that connect webpages to one another, either within a single website or between websites. Links are a fundamental aspect of the Web. By uploading content to the Internet and linking it to pages created by other people, you become an active participant in the World Wide Web\.HTML uses \"markup\" to annotate text, images, and other content for display in a Web browser. HTML markup includes special "elements" such as <head>, <title>, <body>, <header>, <article>, <section>, <p>, <div>, <span>, <img>, and many others.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        use_case: 'http://www.samdallyn.co.uk/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      },
      {
        name: 'CSS',
        description: 'Cascading Style Sheets (CSS) are a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is one of the core languages of the open web and has a standardized W3C specification. Developed in levels, CSS1 is now obsolete, CSS2.1 is a recommendation, and CSS3, now split into smaller modules, is progressing on the standardization track.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        use_case: 'http://www.mindvalley.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      },
      {
        name: 'JavaScript',
        description: 'JavaScript (JS) is a lightweight, interpreted, programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB. JS is a prototype-based, multi-paradigm, dynamic scripting language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        use_case: 'http://clickonitlondon.co.uk/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      },
      {
        name: 'jQuery',
        description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
        documentation: 'http://api.jquery.com/',
        use_case: 'http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_p',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      },
      {
        name: 'Express',
        description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
        documentation: 'https://expressjs.com/',
        use_case: 'https://shrouded-island-56694.herokuapp.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      },
      {
        name: 'body-parser',
        description: 'Parse incoming request bodies in a middleware before your handlers, available under the req.body property.',
        documentation: 'https://github.com/expressjs/body-parser',
        use_case: 'https://shrouded-island-56694.herokuapp.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03'
      }
    ], {});
  }
};

