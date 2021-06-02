const sessionLinkedIn = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU0N2E0Y2FiYzMwM2Q1YzI5YTNiNjlmYjQ5MTgyZDJiZTM5N2YyMmJlZjNkOTU2NmExNDczZDc0YTNkOGU2MDJiBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAxNTozOTowMCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHWplc2tacUNYeTlhQ21MVnlEL0tGb0E9PQY7AEZJIhRsYXN0X2NhdGVnb3JpZXMGOwBGWwZpAkwBSSIWY29tbXVuaXR5X3VzZXJfaWQGOwBGaQMRDQZJIg9jc3JmLnRva2VuBjsAVEkiMG5KaHlRN21fb3lIT1hENVVxdk5JdWRkWXBrUGlmWmdGdFZlVVZxTUh4XzAGOwBGSSIKZmxhc2gGOwBGewA%3D--41e52bc495734cef899903a0393c8e9b59264152`
const sessionGoogle = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU0N2E0Y2FiYzMwM2Q1YzI5YTNiNjlmYjQ5MTgyZDJiZTM5N2YyMmJlZjNkOTU2NmExNDczZDc0YTNkOGU2MDJiBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAxNTozOTowMCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHXIvNTJHN2NhakhxKzh0MEUvL0Q3Y2c9PQY7AEZJIhRsYXN0X2NhdGVnb3JpZXMGOwBGWwZpAkwBSSIPY3NyZi50b2tlbgY7AFRJIjBuSmh5UTdtX295SE9YRDVVcXZOSXVkZFlwa1BpZlpnRnRWZVVWcU1IeF8wBjsARkkiCmZsYXNoBjsARnsASSIWY29tbXVuaXR5X3VzZXJfaWQGOwBGaQMRDQY%3D--435fe9e09d469bc18a762b511f57898f1e2eda38`
const path = 'profile/me'
const pathSERP = '/project-management-planning-software/project-management/'
const saveIcon = '[data-testid="product-info-card_saved-icon"]'

describe(`desktop - /profile/me`, () => {
  
    it(`/profile/me LinkedIn`, () => {

        cy.setCookie(`getapp.session`, sessionLinkedIn)
        cy.visit(path)
    })     

    it(`/profile/me Google`, () => {

        cy.setCookie(`getapp.session`, sessionGoogle)
        cy.visit(path)
    })
    
    it(`Save icon from SERP > sessionGoogle`, () => {
        cy.setCookie(`getapp.session`, sessionLinkedIn)
        cy.visit(pathSERP)
        cy.get(saveIcon).each(($el, $index) => {
            if($index == 5){
                return false;
            }
            cy.wrap($el)
              .wait(1000)
              .click()
        })

        cy.get('[class*="UserSignedInButton-root-"]')
          .wait(1000)
        .click()
        cy.contains("My profile").click() 
        cy.get('#save-button').click({force: true}) 
        
        cy.get('.top-sticky').invoke('css', 'visibility', 'hidden')   
        cy.get('#secondary-header').invoke('css', 'visibility', 'hidden')
        cy.get('#good').invoke('css', 'visibility', 'hidden')
   
        cy.get('#save-button').screenshot()
    })

    it(`Save icon from SERP > sessionLinkedIn`, () => {
        cy.setCookie(`getapp.session`, sessionGoogle)
        cy.visit(pathSERP)
        cy.get(saveIcon).each(($el, $index) => {
            if($index == 5){
                return false;
            }
            cy.wrap($el)
              .wait(1000)
              .click()
        })
        
        cy.get('[class*="UserSignedInButton-root-"]')
          .wait(1000)
          .click()
        cy.contains("My profile").click()
        cy.get('#save-button').click()   
        
        cy.get('.top-sticky').invoke('css', 'visibility', 'hidden')   
        cy.get('#secondary-header').invoke('css', 'visibility', 'hidden')
        cy.get('#good').invoke('css', 'visibility', 'hidden')
   
        cy.get('#save-button').screenshot()
    })
})
