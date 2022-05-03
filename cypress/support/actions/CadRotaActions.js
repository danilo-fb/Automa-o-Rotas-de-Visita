
class CadRotaActions{

    findMenu(){
        cy.get ('div[id="iconeMenuWrapper"]').click()
        cy.get('input[id="txtPesquisar"]').type('Rotas de Visita')
        cy.contains('Rotas de Visita').should('be.visible').click()
    }

    btnnewRota(){
        cy.iframe('iframe[name="tab--Consultas-ConsRota-aspx"]')
        .find('#ctl00_ctl00_mbuToolbar_DXI0_').click()
    }

    cadRota(){
        
        cy.iframe('iframe[name="tab--Cadastros-CadRota-aspx"]')
        .find('input[id$="txtDescricao_I"]').type('Teste Automatizado')
        cy.iframe('iframe[name="tab--Cadastros-CadRota-aspx"]')
        .find('input[id$="tbRotas_dtInicial_I"]').type('30042022')
        cy.iframe('iframe[name="tab--Cadastros-CadRota-aspx"]')
        .find('input[id$="tbRotas_dtFinal_I"]').type('15102022')
        cy.iframe('iframe[name="tab--Cadastros-CadRota-aspx"]')
        .find('input[id$="tbRotas_txtCodRepresentante_I"]').type('4').tab()
        cy.iframe('iframe[name="tab--Cadastros-CadRota-aspx"]')
        .find('span[class="dx-vam dxm-contentText"]').contains('Salvar').click()

        
    }
}

export default new CadRotaActions()