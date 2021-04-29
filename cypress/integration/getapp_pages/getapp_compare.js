import { yesCanonical } from "../../support/testdata/compare";
import {domain} from "../../support/testbase"; 
  
yesCanonical.forEach((yesCanonical) => {
    describe('Verify SERP API properities for canonical path' ,function (){
    
        it(`${yesCanonical}`,function(){
          cy.request(`${domain}api/${yesCanonical}`)
            .then(function(res){        
            expect(res.status).equal(200)
            expect(res.body.head.link_rel[0]).has.property('url', `${domain}${yesCanonical}`)
            expect(res.body.head.link_rel[0]).has.property('rel', 'canonical')
          })
        })
      });
});


  
    
