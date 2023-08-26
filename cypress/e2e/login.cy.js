import LoginPage from "../../pages/LoginPage"

describe('template spec', () => {

  const loginPage = new LoginPage()

it('login with valid credentials', () => {

  loginPage.loginTokura("John Doe", "ThisIsNotAPassword")

})

it('login with Invalid credentials', () => {

  loginPage.loginTokura("John Doe", "ThisIsNotAPwd")
  loginPage.invalidassertion()

})

})






  

