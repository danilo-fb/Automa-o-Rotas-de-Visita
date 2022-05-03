class AuthActions{
    
    access() {
        cy.viewport(1920,1080)
        cy.visit('https://localhost/main')
        cy.get('#btnEntrarNovoNL').should('have.value', 'Login')

    }

    loginForm(user, password){
        cy.get('input[name="txtUsuarioNovoLayout"]').type(user)
        cy.get('label[for="password"]').type(password)
    }

    btnLogin(){
        cy.get('input[name="btnEntrarNovoNL"]').click()
    }

    
}

export default new AuthActions()