const session = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU5NWEyZTFiOTYzZjdmNzQwOTljZjdiZjhiYWY5YzI1YjhmNjljOGRiNGMxMDk3NjExM2VmZTRjNzgzOWRhNWRjBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAwNzozNjozOCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHURKayttNWMrc3d6T2YrVEJOM1RndHc9PQY7AEZJIg9jc3JmLnRva2VuBjsAVEkiMFVBNWZGc3I1VHJXQzhIN05rUjVuRDF0VmlmWFljMHI2aVgxUDE1Q0VpU1EGOwBGSSIJY3VpZAY7AEZJIg9DSll1TkpoTHpwBjsAVEkiFmNvbW11bml0eV91c2VyX2lkBjsARmkDEA0GSSIKZmxhc2gGOwBGewA%3D--aff8a295aa5916c90e8c77409e6a02ce63587b91`
const path = 'profile/scorecards'
const path2 = 'customer-management-software/crm/appfinder/requirements/'

describe(`dekstop - profile/scorecards`, () => {
  
    it(`Appfinders steps`, () => {

        cy.setCookie(`getapp.session`, session)
        cy.visit(path2)
        cy.visit(path)
    })     
});