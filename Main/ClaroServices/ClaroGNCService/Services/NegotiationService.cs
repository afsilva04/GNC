using ClaroGNCService.Models;
using ClaroGNCService.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClaroGNCService.Services
{
    public class NegotiationService
    {
        public bool InsertCustomerInformation(CustomerInformation customerInformation)
        {
            NegotiationRepository repo = new NegotiationRepository();
            return repo.InsertCustomerInformation(customerInformation);
        }
        public List<CustomerInformation> GetExistingNegotiations()
        {
            NegotiationRepository repo = new NegotiationRepository();
            return repo.GetExistingNegotiations();

        }

        public CustomerInformation GetExistingNegotiation(int id)
        {
            NegotiationRepository repo = new NegotiationRepository();
            return repo.GetExistingNegotiation(id);

        }
    }
}