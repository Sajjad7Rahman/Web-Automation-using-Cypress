import MakeAppointment from "../../pages/MakeAppointment";
import LoginPage from "../../pages/LoginPage";

describe('Make Appointment', () => {

    const makeAppointment = new MakeAppointment()

    const loginPage = new LoginPage()

    beforeEach(() => {

        cy.viewport(1920, 1080)
        loginPage.loginTokura("John Doe", "ThisIsNotAPassword")

    })

    
  it('user appointment', () => {
  
    makeAppointment.bookappointment()
  
  })

})