class LoginPages {    
  usernameInput = '[id="username"]'
  passwordInput = '[id="password"]'
  submitButton = '[data-test="signin-submit"]'
  errorMensagenUsername = '[id="username-helper-text"]'
  errorMensagemPassword = '[id="password-helper-text"]'
  

  loginUser = (username, password) => {
    cy.get(this.usernameInput).type(username)
    cy.get(this.passwordInput).type(password)
    cy.get(this.errorMensagemPassword).should('not.exist')
    cy.get(this.errorMensagemPassword).should('not.exist')
    cy.get(this.submitButton).should('not.be.disabled').click()
  }
}

export default LoginPages
