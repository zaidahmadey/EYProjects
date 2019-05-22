using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopperStop.Models.DB;

namespace ShopperStop.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductsController : ControllerBase
  {
 
    public ActionResult GetAllProducts()
    {
      var products = new List<Products>();
      try
      {
        
        return Ok(products);
      }
      catch (Exception ex)
      {
        return Ok(ex);
      }
    }
  }
}
