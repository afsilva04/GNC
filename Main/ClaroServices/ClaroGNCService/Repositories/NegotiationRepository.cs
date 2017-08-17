using ClaroGNCService.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ClaroGNCService.Repositories
{
    public class NegotiationRepository
    {

        public bool InsertCustomerInformation(CustomerInformation customerInformation)
        {
            try
            {
                using (var ctx = new clarogncEntities())
                {
                    ctx.CustomerInformations.Add(customerInformation);
                    ctx.SaveChanges();
                    return true;
                }
            }
            catch (Exception)
            {

                throw;
            }
        }

        public List<CustomerInformation> GetExistingNegotiations()
        {
            try
            {
                using (var ctx = new clarogncEntities())
                {
                    //ctx.CustomerInformations.Where(x => x.id == id).SingleOrDefault();
                    return ctx.CustomerInformations.ToList();
                }
            }
            catch (Exception)
            {

                throw;
            }


        }
    }
}