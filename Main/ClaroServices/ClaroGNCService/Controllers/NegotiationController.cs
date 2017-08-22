using ClaroGNCService.Models;
using ClaroGNCService.Services;
using System.Collections.Generic;
using System.Web.Http;

namespace ClaroGNCService.Controllers
{
    [RoutePrefix("api/negotiation")]
    [AllowAnonymous]
    public class NegotiationController : ApiController
    {
        [Route("InsertCustomerInformation")]
        [AllowAnonymous]
        [HttpPost]
        public bool InsertCustomerInformation(CustomerInformation customerInformation)
        {
            NegotiationService service = new NegotiationService();
            return service.InsertCustomerInformation(customerInformation);
        }

        [Route("GetExistingNegotiations")]
        [AllowAnonymous]
        [HttpGet]
        public List<CustomerInformation> GetExistingNegotiations()
        {
            NegotiationService service = new NegotiationService();
            return service.GetExistingNegotiations();
        }

        // GET api/negotiation/GetExistingNegotiation?id={id}
        [Route("GetExistingNegotiation")]
        [AllowAnonymous]
        [HttpGet]
        public CustomerInformation GetExistingNegotiation(int id)
        {
            NegotiationService service = new NegotiationService();
            return service.GetExistingNegotiation(id);
        }


    }
}