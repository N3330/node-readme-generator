// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "![MIT](https://img.shields.io/badge/License-MIT-blue)"
  } else if (license === 'Apache 2.0') {
    return "![Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-lightgreen)"
  } else if (license === 'Bsd 3.0') {
    return "![Bsd 3.0](https://img.shields.io/badge/License-Bsd%203.0-yellow)"
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "[MIT](https://opensource.org/licenses/MIT)"
  } else if (license === 'Apache 2.0') {
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)"
  } else if (license === 'Bsd 3.0') {
    return "[Bsd 3.0](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return ""
  }
 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license === 'MIT'|| 'Apache 2.0' || 'Bsd 3.0') {
    return "## License"
  }  else {
    return ""
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
 ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#constributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributions}

  ## Tests
  ${data.tests}

## Questions
If you have any questions, please email me at ${data.email} or view my repository at https://github.com/${data.github}?tab=repositories


`;
}

module.exports = generateMarkdown;
