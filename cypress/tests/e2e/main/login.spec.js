// <reference types="cypress"/>
import dataBase from '../../../../data/database.json'
import LoginPages from '../login/login'

const loginPages = new LoginPages()

const { username } = dataBase.users[1] 
const senha = 's3cret'


describe('Login Tests', () => {

  beforeEach(() => {
    cy.visit('/signin')
  })
 
  it('Should login successfully with valid credentials', () => {
    loginPages.loginUser(username, senha)
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should show an error for invalid username', () => {
    loginPages.loginUser('maicon.mai', senha)
  })

  it('Should show an error for invalid password', () => {
    loginPages.loginUser(username, 'mai@123')
  })
  
  it('Should show an error for empty username', () => {
    loginPages.loginUsernameEmpty(senha)
  })
  
  it('Should show an error for empty password', () => {
    loginPages.loginPasswordEmpty(username)
  })  
  
  it('Should show errors for empty password', () => {
    loginPages.loginUsernamePasswordEmtpy()
  })  
  
  it('Should show an error for a password below the minimum length', () => {
    loginPages.loginPasswordBelowMinimum(username, 'm@3')
  })

});