import auth from '../support/actions/AuthActions'
import rota from '../support/actions/CadRotaActions'


describe('Cadastro de Rotas de Visita', function (){

    it('Sistema deve estar online', function (){
        
        auth.access()
        auth.loginForm('danilo', '123456')
        auth.btnLogin()

        rota.findMenu()
        rota.btnnewRota()
        rota.cadRota()
        
        

    })


})