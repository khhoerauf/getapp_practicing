const session = `BAh7D0kiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkVjZmJlOWViYzRkMzJjMjhiYjhlYTkxZTY4NTQ1MGI2YjJmODFmNDc4ZmEzMjAzZjlkZDg4ZjVhZjg3NDZiMjM0BjsARkkiC2xvY2FsZQY7AEZJIgdlbgY7AFRJIg9jc3JmLnRva2VuBjsAVEkiMFZLRXlfc1BIb2liY1dZZjdaYU1sWUYxWTZKODk2NEUyM2Y3M0VUMVpLQ0EGOwBGSSIUbGFzdF9jYXRlZ29yaWVzBjsARlsPaQIyAWkCPgFpAelpAukEaQIrAWkB5mkB7GkB8GkCTAFpAqoCSSIfY29tbXVuaXR5X2NoZWNrX29uYm9hcmRpbmcGOwBGVEkiC3J0b2tlbgY7AEZJIkVjSVlNMFVyV0tlX1gzd2dSNDFfZHVJUnNBVWM3ZWk3dUtNbXMzVENUSWlkZTE1QlJLTExqUFd4VkQ2SWR4T1ZXBjsAVEkiDHJzZWNyZXQGOwBGSSJFMVU2QlVwVnJnRS1EeUlDa19YdmxueHdRSjc3MnRIME4wQldLdEtCV2tsSHZIUzhhV2FEYWNvQVFXQzMzSG4yYQY7AFRJIgljdWlkBjsARkkiDy10MEo2SXlQVVYGOwBUSSIWY29tbXVuaXR5X3VzZXJfaWQGOwBGaQPHtQNJIhFjb21wYW55X3NpemUGOwBGSSIJMS0xMAY7AFQ%3D--fabaf71f0485037a6680c9f238f50bf758e671a7`
const path = 'profile/onboarding/my-integrations/'

describe(`dekstop - profile/onboarding/my-integrations/`, () => {
    it(`Verify if steps in recommandaion works`, () => {

      cy.setCookie(`getapp.session`, session)
      cy.visit(path)

      cy.get('.onboarding-my-recommendations-header-lets-do-it-btn')
        .click();
      cy.get('#onboarding-recommendations-step1-submit-btn')
        .click();
      cy.get('#onboarding-recommendations-step2-submit-btn')
        .click();
      cy.get(':nth-child(12) > .col-12 > .btn') 
        .click();
      cy.get("[class='profile-my-integrations-listing-card-container']")
        .should('exist');
      cy.get('.popular-integrations-headline')
        .should('not.exist');
      cy.get("[class='integration-card mb-1']") 
       .should('not.exist');
    })
});