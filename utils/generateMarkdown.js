// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'Apache 2.0 License') {
    return `Apache 2.0 License [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`
  }
  if (license === 'Boost Software License 1.0') {
    return `Boost Software License 1.0 [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`
  }
  if (license === 'Eclipse Public License 1.0') {
    return `Eclipse Public License 1.0 [![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`
  }
  if (license === 'IBM Public License Version 1.0') {
    return `IBM Public License Version 1.0 [![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`
  }
  if (license === 'MIT') {
    return `MIT [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
  }
  if(license === 'Mozilla Public License 2.0') {
    return `Mozilla Public License 2.0[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`
  }
  if(license === 'No License applicable'){
    return ''
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'Apache 2.0 License') {
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  if (license === 'Boost Software License 1.0') {
    return `(https://www.boost.org/LICENSE_1_0.txt)`
  }
  if (license === 'Eclipse Public License 1.0') {
    return `(https://opensource.org/licenses/EPL-1.0)`
  }
  if (license === 'IBM Public License Version 1.0') {
    return `(https://opensource.org/licenses/IPL-1.0)`
  }
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  }
  if(license === 'Mozilla Public License 2.0') {
    return `(https://opensource.org/licenses/MPL-2.0)`
  }
  if(license === 'No License applicable'){
    return ''
}}

// TODO: Create a function to generate markdown for README
function makeMarkdown(data) {
  console.log(data)
  return `# ${data.title}\n
## Table of Contents: 
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributions](#contributions)\n
[License](#license)\n
[Questions](#questions)\n
## Description: \n${data.description}\n
## Installation: \n${data.installation}\n
## Usage: \n${data.usage}\n
## Contributions: \n${data.contributions}\n
## License: \n${renderLicenseBadge(data.license)}\n
${renderLicenseLink(data.license)}\n
## Questions: \nGithub Username: https://github.com/${data.username}\n
\nEmail: ${data.email}\n`;
}

module.exports = makeMarkdown;
