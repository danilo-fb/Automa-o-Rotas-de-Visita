
/// <reference types="cypress-xpath" />
import auth from '../support/actions/AuthActions'
describe('login', ()=>{

    it('Sistema deve estar online', ()=>{
        
        auth.go()
        auth.loginForm('danilo', '123456')
        auth.btnLogin()
 

       
       
    })
    })
