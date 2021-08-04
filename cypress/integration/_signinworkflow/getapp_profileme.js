import {viewportsObj} from "../../support/testbase";   

const sessionLinkedIn = `BAh7D0kiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkVjZmJlOWViYzRkMzJjMjhiYjhlYTkxZTY4NTQ1MGI2YjJmODFmNDc4ZmEzMjAzZjlkZDg4ZjVhZjg3NDZiMjM0BjsARkkiC2xvY2FsZQY7AEZJIgdlbgY7AFRJIg9jc3JmLnRva2VuBjsAVEkiMFZLRXlfc1BIb2liY1dZZjdaYU1sWUYxWTZKODk2NEUyM2Y3M0VUMVpLQ0EGOwBGSSIUbGFzdF9jYXRlZ29yaWVzBjsARlsPaQIyAWkCPgFpAelpAukEaQIrAWkB5mkB7GkB8GkCTAFpAqoCSSIfY29tbXVuaXR5X2NoZWNrX29uYm9hcmRpbmcGOwBGVEkiC3J0b2tlbgY7AEZJIkVjSVlNMFVyV0tlX1gzd2dSNDFfZHVJUnNBVWM3ZWk3dUtNbXMzVENUSWlkZTE1QlJLTExqUFd4VkQ2SWR4T1ZXBjsAVEkiDHJzZWNyZXQGOwBGSSJFMVU2QlVwVnJnRS1EeUlDa19YdmxueHdRSjc3MnRIME4wQldLdEtCV2tsSHZIUzhhV2FEYWNvQVFXQzMzSG4yYQY7AFRJIgljdWlkBjsARkkiDy10MEo2SXlQVVYGOwBUSSIWY29tbXVuaXR5X3VzZXJfaWQGOwBGaQPHtQNJIhFjb21wYW55X3NpemUGOwBGSSIJMS0xMAY7AFQ%3D--fabaf71f0485037a6680c9f238f50bf758e671a7`
const sessionGoogle = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU0N2E0Y2FiYzMwM2Q1YzI5YTNiNjlmYjQ5MTgyZDJiZTM5N2YyMmJlZjNkOTU2NmExNDczZDc0YTNkOGU2MDJiBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAxNTozOTowMCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHXIvNTJHN2NhakhxKzh0MEUvL0Q3Y2c9PQY7AEZJIhRsYXN0X2NhdGVnb3JpZXMGOwBGWwZpAkwBSSIPY3NyZi50b2tlbgY7AFRJIjBuSmh5UTdtX295SE9YRDVVcXZOSXVkZFlwa1BpZlpnRnRWZVVWcU1IeF8wBjsARkkiCmZsYXNoBjsARnsASSIWY29tbXVuaXR5X3VzZXJfaWQGOwBGaQMRDQY%3D--435fe9e09d469bc18a762b511f57898f1e2eda38`
const path = 'profile/me'
const pathSERP = '/project-management-planning-software/project-management/'
const saveIcon = '[data-testid="product-info-card_saved-icon"]'

describe(`desktop - /profile/me`, () => {
  
    it(`/profile/me LinkedIn`, () => {
        cy.setCookie(`getapp.session`, sessionLinkedIn)
        cy.visit(path)
        cy.get('.page-title-row > .mdl-typography--display-1').invoke("text").then(text => {
            expect(text).to.eq('My profile')
        })
        cy.get('.nav-links > :nth-child(2) > a').click()
        cy.get('.pagehead-headline').invoke("text").then(text => {
            expect(text).to.eq('My recommendations')
        })
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

viewportsObj.forEach((viewport) => {
    describe(`mobile - /profile/me`, viewport, () => {
    it.only(`/profile/me LinkedIn`, () => {
        cy.setCookie(`getapp.session`, sessionLinkedIn)
        cy.visit(path, { headers: 
            {'user-agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1'}
        })
        
        cy.get('.page-title-row > .mdl-typography--display-1').invoke("text").then(text => {
            expect(text).to.eq('My profile')
        })
    })
})})