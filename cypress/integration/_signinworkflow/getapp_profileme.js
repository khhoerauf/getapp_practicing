const sessionLinkedIn = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU5NWEyZTFiOTYzZjdmNzQwOTljZjdiZjhiYWY5YzI1YjhmNjljOGRiNGMxMDk3NjExM2VmZTRjNzgzOWRhNWRjBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAwNzozNjozOCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHURKayttNWMrc3d6T2YrVEJOM1RndHc9PQY7AEZJIg9jc3JmLnRva2VuBjsAVEkiMFVBNWZGc3I1VHJXQzhIN05rUjVuRDF0VmlmWFljMHI2aVgxUDE1Q0VpU1EGOwBGSSIJY3VpZAY7AEZJIg9DSll1TkpoTHpwBjsAVEkiFmNvbW11bml0eV91c2VyX2lkBjsARmkDEA0GSSIKZmxhc2gGOwBGewA%3D--aff8a295aa5916c90e8c77409e6a02ce63587b91`
const sessionGoogle = `BAh7DUkiD3Nlc3Npb25faWQGOgZFVG86HVJhY2s6OlNlc3Npb246OlNlc3Npb25JZAY6D0BwdWJsaWNfaWRJIkU5NWEyZTFiOTYzZjdmNzQwOTljZjdiZjhiYWY5YzI1YjhmNjljOGRiNGMxMDk3NjExM2VmZTRjNzgzOWRhNWRjBjsARkkiD2ZpcnN0X3NlZW4GOwBGSSIeMjAyMS0wNi0wMiAwNzozNjozOCArMDAwMAY7AEZJIgtsb2NhbGUGOwBGSSIHZW4GOwBUSSIRZy14c3JmLXRva2VuBjsAVEkiHUZ2cUtWYmdlajdEcjc5UTN6eHlKRXc9PQY7AEZJIg9jc3JmLnRva2VuBjsAVEkiMFVBNWZGc3I1VHJXQzhIN05rUjVuRDF0VmlmWFljMHI2aVgxUDE1Q0VpU1EGOwBGSSIKZmxhc2gGOwBGewBJIgljdWlkBjsARkkiGjExMjczNzk5NjA3NTkzMjMyNDg0OAY7AFRJIhZjb21tdW5pdHlfdXNlcl9pZAY7AEZpA%2FsCBg%3D%3D--9e68501e9fd8317e8f918970907dd8718b10c2a7`
const path = 'profile/me'

describe(`desktop - /profile/me`, () => {
  
    it(`/profile/me LinkedIn`, () => {

        cy.setCookie(`getapp.session`, sessionLinkedIn)
        cy.visit(path)
    })     

    it(`/profile/me Google`, () => {

        cy.setCookie(`getapp.session`, sessionGoogle)
        cy.visit(path)
    })  
})