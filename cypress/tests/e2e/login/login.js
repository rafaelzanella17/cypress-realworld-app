class LoginPages {    
  usernameInput = '[id="username"]'
  passwordInput = '[id="password"]'
  submitButton = '[data-test="signin-submit"]'
  errorMensagenUsername = '[id="username-helper-text"]'
  errorMensagemPassword = '[id="password-helper-text"]'
  

  loginUser = (username, password) => {
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.errorMensagenUsername).should('not.exist')
    cy.get(this.errorMensagemPassword).should('not.exist')
    cy.get(this.submitButton).should('not.be.disabled').click()
  }

  loginUsernameEmpty = (password) => {
    cy.get(this.passwordInput).type(password)
    cy.get(this.errorMensagenUsername).should('exist')
    cy.get(this.errorMensagemPassword).should('not.exist')
    cy.get(this.submitButton).should('be.disabled')
  }

  loginPasswordEmpty = (username) => {
    cy.get(this.usernameInput).type(username)
    cy.get(this.errorMensagenUsername).should('not.exist')
    cy.get(this.errorMensagemPassword).should('not.exist')
    cy.get(this.submitButton).should('be.disabled')
  }
  
  loginUsernamePasswordEmtpy = () => {
    cy.get(this.usernameInput).click()
    cy.get(this.passwordInput).click()
    cy.get(this.errorMensagenUsername).should('exist')
    cy.get(this.submitButton).should('be.disabled')
  }

  loginPasswordBelowMinimum = (username, password) => {
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password).blur()
    cy.get(this.errorMensagenUsername).should('not.exist')
    cy.get(this.submitButton).should('be.disabled')
  }
}

export default LoginPages
