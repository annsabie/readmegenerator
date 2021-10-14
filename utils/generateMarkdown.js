// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![License](https://img.shields.io/badge/license-${data.license}-blue)

  ##Description
  ${data.description}

  ##Table of Contents
  - [Installation] (#installation)
  - [Usage] (#usage)
  - [Credits] (#credits)
  - [Contributions] (#contributions)
  - [Tests] (#tests)
  - [License] (#license)
  - [Questions] (#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ## Contributions
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## License
  This application is covered under the ${data.license} license. 

  ## Questions
  For additional questions and concerns, please contact me at one of the following:
  ${data.email}
  ${data.github}
`;
}

module.exports = generateMarkdown;
