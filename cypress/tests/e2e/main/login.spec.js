// <reference types="cypress"/>
import dataBase from '../../../../data/database.json'
import LoginPages from '../login/login';

const loginPages = new LoginPages()

const { username } = dataBase.users[1] 
const senha = 's3cret'


describe('Login com sucesso', () => {

  beforeEach(() => {
    cy.visit('/signin')
  })

  it('Login com um usuário válido', () => {
    loginPages.loginUser(username, senha)
  });
});