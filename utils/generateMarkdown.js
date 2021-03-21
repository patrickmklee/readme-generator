// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === null) {
    return ``
  } else {
  return `[![License: ${license.name}](${encodeURI(`https://img.shields.io/badge/License-${license.name}-green.svg`)})](${license.link})
  `
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === null) {
    return ``
  } else {
    return `[${license.name}](${license.link})
    `
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license||null) return ""
  return `## License
  This project is using the ${renderLicenseLink(license)} License
  `
}

  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
  `
  
  ;
}

module.exports = generateMarkdown;
