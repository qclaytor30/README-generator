function generateMarkdown(data, githubInfo) {
  return `
# **${data.title}**
${data.badge}
## Description 
${data.description}
## Table of contents
- [Description](#Description)
- [Usage](#Usage)
- [Licence](#Licence)
- [Contributors](#Contributors)
- [Installation](#Installation)
- [Test](#Test)
- [Repository Link](#Repository)
- [GitHub Info](#GitHub) 
## Installation
        ${data.installation}
## Usage
${data.usage}
## Licence
${data.licence}
## Contributors
${data.contributing}
## Test
${data.test}
## Repository
- [Project Repo](${data.repo})
## GitHub
![Image of me](${githubInfo.githubImage})
- ${githubInfo.name}
- [GitHub Profile](${githubInfo.profile})
- <${githubInfo.email}>
`;
}

module.exports = generateMarkdown;