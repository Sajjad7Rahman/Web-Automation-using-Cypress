class MakeAppointment{

    bookappointment(){

    cy.get('select').select('Seoul CURA Healthcare Center')
    cy.get('#chk_hospotal_readmission').click()
    cy.get('#radio_program_medicaid').click()
    cy.get('#txt_visit_date').type(26/8/2023)
    cy.get('h2').click()
    cy.get('#txt_comment').type('thankyou')
    cy.get('#btn-book-appointment').click()
    cy.get('h2').should('have.text', 'Appointment Confirmation')

}

}

export default MakeAppointment