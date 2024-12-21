class NewUser {
  selectorsList() {
    const selectors = {
      linkSignUp: 'a[data-test="signup"]',
      firstNameInput: '[id="firstName"]',
      lastNameInput: '[id="lastName"]',
      usernameInput: '[id="username"]',
      passwordInput: '[id="password"]',
      passwordConfirm: '[id="confirmPassword"]',
      buttonSignUp: '[data-test="signup-submit"]',
      errorFirstName: '[id="firstName-helper-text"]',
      errorLastName: '[id="lastName-helper-text"]',
      errorUsername: '[id="username-helper-text"]',
      errorPassword: '[id="password-helper-text"]',
      errorPasswordConfirm: '[id="confirmPassword-helper-text"]'
    }
    return selectors
  }

  pageSignUp() {
    cy.get(this.selectorsList().linkSignUp)
    .should('have.text', `Don't have an account? Sign Up`)
    .click()
  }
  
  signUpNewUser = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().lastNameInput).type(lastName)
    cy.get(this.selectorsList().usernameInput).type(username)
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('not.be.disabled').click()
    cy.url().should('eq', 'http://localhost:3000/signin')    
    cy.log('Teste de inscrição concluído com sucesso!')
  }

  fisrtNameMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().lastNameInput).type(lastName)
    cy.get(this.selectorsList().usernameInput).type(username)
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Fisrt Name is required')
  }

  lastNameMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().lastNameInput).click().blur()
    cy.get(this.selectorsList().usernameInput).type(username)
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Last Name is required')
  }

  usernameMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().lastNameInput).type(lastName)
    cy.get(this.selectorsList().usernameInput).click().blur()
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Username is required')
  }

  passwordMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().lastNameInput).type(lastName)
    cy.get(this.selectorsList().usernameInput).type(username)
    cy.get(this.selectorsList().passwordInput).click().blur()
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Password is required')
  }

  passwordConfirmMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().lastNameInput).type(lastName)
    cy.get(this.selectorsList().usernameInput).type(username)
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).click().blur()
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Password comfirm is required')
  }

  lastNameOrUsernameMessageError = (firstName, lastName, username, password, passwordConfirm) => {
    cy.get(this.selectorsList().firstNameInput).type(firstName)
    cy.get(this.selectorsList().passwordInput).type(password)
    cy.get(this.selectorsList().passwordConfirm).type(passwordConfirm)
    cy.get(this.selectorsList().buttonSignUp).should('be.disabled')
    cy.log('Last name or username is required')
  }
}
  
export default NewUser