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
        updatedAt: '2017-02-03',
        category_name: 'Languages'
      },
      {
        name: 'JavaScript',
        description: 'JavaScript (JS) is a lightweight, interpreted, programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as node.js and Apache CouchDB. JS is a prototype-based, multi-paradigm, dynamic scripting language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        use_case: 'http://clickonitlondon.co.uk/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name: 'Languages'
      },
       {
        name: 'C++',
        description: 'C++ (pronounced cee plus plus, /ˈsiː plʌs plʌs/) is a general-purpose programming language. It has imperative, object-oriented and generic programming features, while also providing facilities for low-level memory manipulation.',
        documentation: 'http://webstore.ansi.org/RecordDetail.aspx?sku=INCITS%2fISO%2fIEC+14882%3a2014+%282016%29',
        use_case: 'https://www.webtoolkit.eu/wt/examples/wt_homepage',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Languages'
      },
      {
        name: 'Python',
        description: 'Python is a widely used high-level programming language used for general-purpose programming, created by Guido van Rossum and first released in 1991. An interpreted language, Python has a design philosophy which emphasizes code readability (notably using whitespace indentation to delimit code blocks rather than curly braces or keywords), and a syntax which allows programmers to express concepts in fewer lines of code than possible in languages such as C++ or Java. The language provides constructs intended to enable writing clear programs on both a small and large scale.',
        documentation: 'https://www.python.org/doc/',
        use_case: 'http://www.consumerfinance.gov/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Languages'
      },
      {
        name: 'Lodash',
        description: 'A modern JavaScript utility library delivering modularity, performance & extras.',
        documentation: 'https://lodash.com/docs/4.17.4',
        use_case: 'http://www.goal.com/en-us/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Libraries'
      },
      {
        name: 'D3',
        description: 'D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation.',
        documentation: 'https://github.com/d3/d3/wiki',
        use_case: 'https://github.com/d3/d3/wiki/Gallery',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Libraries'
      },
       {
        name: 'jQuery',
        description: 'jQuery is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers.',
        documentation: 'http://api.jquery.com/',
        use_case: 'http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_hide_p',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name: 'Libraries'
      },
      {
        name: 'Express',
        description: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
        documentation: 'https://expressjs.com/',
        use_case: 'https://shrouded-island-56694.herokuapp.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name: 'Framework'
      },
      {
        name: 'Ruby On Rails',
        description: 'Ruby on Rails, or simply Rails, is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.',
        documentation: 'http://guides.rubyonrails.org/',
        use_case: 'https://www.airbnb.com/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Frameworks'
      },
      {
        name: 'AngularJS',
        description: 'AngularJS lets you extend HTML vocabulary for your application. The resulting environment is extraordinarily expressive, readable, and quick to develop.',
        documentation: 'https://angularjs.org/',
        use_case: 'https://www.madewithangular.com/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Frameworks'
      },
      {
        name: 'CSS',
        description: 'Cascading Style Sheets (CSS) are a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects like SVG or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media. CSS is one of the core languages of the open web and has a standardized W3C specification. Developed in levels, CSS1 is now obsolete, CSS2.1 is a recommendation, and CSS3, now split into smaller modules, is progressing on the standardization track.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
        use_case: 'http://www.mindvalley.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name:'Styling'
      },
      {
        name: 'Bootstrap',
        description: 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        documentation: 'http://bootstrapdocs.com/v3.0.3/docs/css/',
        use_case: 'http://builtwithbootstrap.com/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Styling'
      },
       {
        name: 'Materialize',
        description: 'Created and designed by Google, Material Design is a design language that combines the classic principles of successful design along with innovation and technology. Google\'s goal is to develop a system of design that allows for a unified user experience across all their products on any platform.',
        documentation: 'http://materializecss.com/getting-started.html',
        use_case: 'https://material.uplabs.com/posts/tool/materialize',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Styling'
      },
      {
        name: 'Flexbox',
        description: 'The CSS3 Flexible Box, or flexbox, is a layout mode providing for the arrangement of elements on a page such that the elements behave predictably when the page layout must accommodate different screen sizes and different display devices. For many applications, the flexible box model provides an improvement over the block model in that it does not use floats, nor do the flex container\'s margins collapse with the margins of its contents.',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes',
        use_case: 'https://umaar.github.io/css-flexbox-demo/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Styling'
      },
      {
        name: 'body-parser',
        description: 'Parse incoming request bodies in a middleware before your handlers, available under the req.body property.',
        documentation: 'https://github.com/expressjs/body-parser',
        use_case: 'https://shrouded-island-56694.herokuapp.com/',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name: 'Modules_and_Components'
      },
      {
        name: 'jquery-scrollify',
        description: 'A jQuery plugin that assists scrolling and smoothly snaps to sections.',
        documentation: 'https://www.npmjs.com/package/jquery-scrollify',
        use_case: 'https://projects.lukehaas.me/scrollify/#home',
        createdAt: '2017-02-03',
        updatedAt: '2017-02-03',
        category_name: 'Plugins'
      },
      {
        name: 'makeItRain',
        description: 'A jquery plugin that will help you "make it rain" all over your website!',
        documentation: 'https://github.com/sarahlesh/makeItRain/',
        use_case: 'https://jenkaplan.github.io/ConnectThree/ConnectThree.html',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Plugins'
      },
      {
        name: 'Open Weather Map',
        description: 'Get current weather, daily forecast for 16 days, and 3-hourly forecast 5 days for your city. Helpful stats, graphics, and this day in history charts are available for your reference. Interactive maps show precipitation, clouds, pressure, wind around your location.',
        documentation: 'https://openweathermap.org/api',
        use_case: 'http://www.greatparks.org/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'APIs'
      },
      {
        name: 'Google Map API',
        description: 'Millions of websites and apps use Google Maps APIs to power location experiences for their users.',
        documentation: 'https://developers.google.com/maps/documentation/',
        use_case: 'https://www.google.com/maps',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'APIs'
      },
      {
        name: 'Git',
        description: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
        documentation: 'https://git-scm.com/doc',
        use_case: 'https://github.com/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Collaboration_Tools'
      },
       {
        name: 'GitHub',
        description: 'GitHub is a web-based Git or version control repository and Internet hosting service. It offers all of the distributed version control and source code management (SCM) functionality of Git as well as adding its own features. It provides access control and several collaboration features such as bug tracking, feature requests, task management, and wikis for every project.',
        documentation: 'https://guides.github.com/',
        use_case: 'https://shrouded-island-56694.herokuapp.com/',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Collaboration_Tools'
      },
      {
        name: 'Sublime Text',
        description: 'Sublime Text is a sophisticated text editor for code, markup and prose. You\'ll love the slick user interface, extraordinary features and amazing performance.',
        documentation: 'https://www.sublimetext.com/docs/3/',
        use_case: '',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Text_Editors'
      },
      {
        name: 'Atom',
        description: 'Atom is a text editor that\'s modern, approachable, yet hackable to the core—a tool you can customize to do anything but also use productively without ever touching a config file.',
        documentation: 'https://atom.io/docs',
        use_case: '',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Text_Editors'
      },

      {
        name: 'Be Focused',
        description: 'Staying on task seems is a real challenge for our screen-bound generation. The Be Focused lets you get things done by breaking up individual tasks among discrete intervals, separated by short breaks. It’s a surprisingly effective way to retain motivation and focus. Create tasks, configure breaks and track your progress throughout the day, week or custom period.',
        documentation: 'https://itunes.apple.com/us/app/be-focused-focus-timer-goal/id973130201?mt=8',
        use_case: '',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Productivity'
      },
      {
        name: 'Trello',
        description: 'So much more than just project management, Trello is the visual collaboration tool that enables teams of all sizes to get things done, in a fun and flexible way. Trello boards create a shared perspective on anything your team sets out to do.',
        documentation: 'https://trello.com/tour',
        use_case: 'https://trello.com/b/C32pKhqS/scheduler-unit-2-project',
        createdAt: '2017-02-06',
        updatedAt: '2017-02-06',
        category_name: 'Productivity'
      }

    ], {});
  }
};
