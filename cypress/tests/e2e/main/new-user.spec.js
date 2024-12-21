import NewUser from "../new-user/new-user"

const newUser = new NewUser()

const firstName = 'Rafael'
const lastName = 'Zanella'
const username = 'rafaelzanella'
const password = '1234'
const passwordConfirm = '1234' 

describe('Create User', () => {

  beforeEach(() => {
    cy.visit('/signin')
    newUser.pageSignUp()
  })

  it('New user registration successful.', () => {
    newUser.signUpNewUser(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank first name', () => {
    newUser.fisrtNameMessageError(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank last name', () => {
    newUser.lastNameMessageError(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank username', () => {
    newUser.usernameMessageError(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank password', () => {
    newUser.passwordMessageError(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank password confirm', () => {
    newUser.passwordConfirmMessageError(firstName, lastName, username, password, passwordConfirm)
  })

  it('Attempt to register a new user with a blank last name or username', () => {
    newUser.lastNameOrUsernameMessageError('Rafael Zanella', lastName, username, password, passwordConfirm)
  })
})