import { ResumeEntry } from "./ResumeEntry";

const brandfolder: ResumeEntry = {
  company: 'Brandfolder',
  location: {
    city: 'Denver',
    state: 'CO'
  },
  positions: [{
    title: 'Senior Software Engineer I',
    startDate: 'April 2021',
    endDate: 'Present'
  }, {
    title: 'Full Stack Developer',
    startDate: 'November 2019',
    endDate: 'April 2021'
  }],
  bullets: [
    "Organized work, reviewed and contributed code to lead teams of 2-7 software engineers to build and update features core to Brandfolder's offerings. For example, rebuilt the jQuery + slim asset information editing UI to use API-powered React, created a collaborative work management space for in-progress assets, and expanded taxonomy capabilities by supporting multi-value custom fields and automation",
    "Introduced TypeScript to the codebase, significantly improving code quality, durability, and maintainability",
    "Collaborated closely with Product and Customer Experience team members to resolve customer issues weekly",
    "Mentored junior developers and supported coworkers in areas of passions like TypeScript, testing, and accessibility best practices"
  ],
  internship: false
};

const microsoft: ResumeEntry = {
  company: 'Microsoft',
  location: {
    city: 'Redmond',
    state: 'WA'
  },
  positions: [{
    title: 'Software Engineer I',
    startDate: 'August 2018',
    endDate: 'November 2019'
  }],
  bullets: [
    "Developed reporting features across Microsoft's Azure DevOps product by writing and reviewing code as a member of one of its only horizontal teams",
    'Collaborated closely with product managers and other engineers from start to finish on features - including spec reviews, development design, development, and post-deployment telemetry to measure success and adoption',
    'Shared knowledge with teammates about experimental methodology and design as well as early experience with Jest and the Enzyme library',
    "Adapted to work in both the product's legacy codebase (JavaScript, jQuery) and modern codebase (TypeScript, React, Jest)",
    "Contributed to a performance effort that resulted in a 50% Apdex improvement in the team's main feature area",
    'Served as feature lead for displaying work rollup progress on Azure DevOps backlogs',
    'Monitored live site health, managed and tuned automated alerts, facilitated daily stand-up, and worked to resolve bugs and customer issues during on-call engineer rotations'
  ],
  internship: false
};

const square: ResumeEntry = {
  company: 'Square',
  location: {
    city: 'San Francisco',
    state: 'CA'
  },
  positions: [{
    title: 'Software Engineer Intern',
    startDate: 'June 2017',
    endDate: 'September 2017'
  }],
  bullets: [
    'Wrote and deployed industry-standard code in a fast-paced, agile development workflow',
    'Implemented an interactive widget as a tool for Square\'s API documentation website using Ruby on Rails, JavaScript, HTML, Sass, and Square\'s e-commerce Rails SDK'
  ],
  internship: true
};

const googleSeattle: ResumeEntry = {
  company: 'Google',
  location: {
    city: 'Seattle',
    state: 'WA'
  },
  positions: [{
    title: 'Engineering Practicum Intern',
    startDate: 'June 2016',
    endDate: 'September 2016'
  }],
  bullets: [
    'Built a guided flow that allows Cloud Launcher solution partners to control the configuration options available to the customers deploying these solutions',
    'Used HTML, CSS, JavaScript, and AngularJS to build the front-end structure of the configuration editor according to UX mocks as well as implement dynamic use of back-end data about the solution configuration'
  ],
  internship: true
};

const googleMV: ResumeEntry = {
  company: 'Google',
  location: {
    city: 'Mountain View',
    state: 'CA'
  },
  positions: [{
    title: 'Engineering Practicum Intern',
    startDate: 'June 2015',
    endDate: 'June 2015'
  }],
  bullets: [
    'Enhanced code that displays knowledge graph facts to support subscripts and superscripts across multiple platforms by enriching protocol buffers as well as updating templates through a template-rendering engine',
    'Implemented a Java handler for electron shell configuration and chemical formula knowledge graph facts to add and render the appropriate subscript/superscript information'
  ],
  internship: true
};

export const resumeEntries: ResumeEntry[] = [brandfolder, microsoft, square, googleSeattle, googleMV];
