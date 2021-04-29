import { 
  noCanonicalNoIndexFollow,
  yesCanonicalNoRobot,
  noCanonicalNoIndexNoFollow } from "../../support/testdata/serp";
import {domain} from "../../support/testbase"; 


yesCanonicalNoRobot.forEach((yesCanonicalNoRobot) => {
describe('Verify SERP API properities for canonical path' ,function (){

    it(`${yesCanonicalNoRobot}`,function(){
      cy.request(`${domain}api/${yesCanonicalNoRobot}`)
        .then(function(res){        
        expect(res.status).equal(200)
        expect(res.body.head.meta).has.property('robots', null)
        expect(res.body.head.link_rel[0]).has.property('url', `${domain}${yesCanonicalNoRobot}`)
        expect(res.body.head.link_rel[0]).has.property('rel', 'canonical')
      })
    })
  });
});

noCanonicalNoIndexFollow.forEach((noCanonicalNoIndexFollow) => {
  describe('Verify SERP API properities for noncanonical path' ,function (){
  
      it(`${noCanonicalNoIndexFollow}`,function(){
        cy.request(`${domain}api/${noCanonicalNoIndexFollow}`)
          .then(function(response){        
          expect(response.status).equal(200)
          expect(response.body.head.meta).has.property('robots', 'noindex,follow')
          expect(response.body.head.link_rel).to.be.empty
        })
      })
    });
  });

noCanonicalNoIndexNoFollow.forEach((noCanonicalNoIndexNoFollow) => {
    describe('Verify SERP API properities for noncanonical path' ,function (){
    
        it(`${noCanonicalNoIndexNoFollow}`,function(){
          cy.request(`${domain}api/${noCanonicalNoIndexNoFollow}`)
            .then(function(response){        
            expect(response.status).equal(200)
            expect(response.body.head.meta).has.property('robots', 'noindex,nofollow')
            expect(response.body.head.link_rel).to.be.empty
          })
        })
      });
   });

  