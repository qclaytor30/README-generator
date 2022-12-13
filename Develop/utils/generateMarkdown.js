function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**

## Description

${data.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage) 
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
To install necessary dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`
## Usage
\`\`\`
${data.usage} 
\`\`\`
## License
${data.licence}
## Contributing
${data.contributing}
## Tests
To run tests, run the following command:
\`\`\`
${data.test}
\`\`\`
## Questions
You can find more of my work at [${data.username}](https://github.com/${data.username}/).`;
}

module.exports = generateMarkdown;