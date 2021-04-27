import { 
  noncanonical_path,
  canonical_path,
  domain } from "../../support/serp";


canonical_path.forEach((canonical_path) => {
describe('Verify SERP API properities for canonical url' ,function (){

    it(`${canonical_path}`,function(){
      cy.request(`${domain}api/${canonical_path}`)
        .then(function(res){        
        expect(res.status).equal(200)
        expect(res.body.head.meta).has.property('robots', null)
        expect(res.body.head.link_rel[0]).has.property('url', `${domain}${canonical_path}`)
        expect(res.body.head.link_rel[0]).has.property('rel', 'canonical')
      })
    })
  });
});

 

  