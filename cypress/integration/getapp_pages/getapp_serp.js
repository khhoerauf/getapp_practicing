import { path } from "../../support/serp";


describe('SERP API Response for ${path}',function (){

    it('GET',function(){
      cy.request(`/${path}`)
        .then(function(res){
        
        expect(res.status).equal(200)

        expect(res.body)
          .has.property('route_name', 'serp_category')
        expect(res.body)
          .has.property('buyers_guide', null)
        expect(res.body.head.link_rel[0])
          .has.property('url', 'https://pr0000.gappdev.com/collaboration-software/calendar/')
        expect(res.body.head.link_rel[0])
          .has.property('rel', 'canonical')

      })
    })
});

 

  