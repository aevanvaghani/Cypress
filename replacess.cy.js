// const fs = require('fs-extra')

it('should replace a screenshot', () => {

  cy.visit('https://www.opencart.com/')

  const fileName = 'ss'
  cy.screenshot(fileName)

  // fs.removeSync('D:\cypress\cypressAutomation\cypress\screenshots\account create.png')

  // cy.screenshot(fileName)
})
