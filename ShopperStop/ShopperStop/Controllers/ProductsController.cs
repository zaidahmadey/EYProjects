using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopperStop.Common;
using ShopperStop.DataLayer;
using ShopperStop.DataLayer.Interface;
using ShopperStop.Models.DB;

namespace ShopperStop.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class ProductsController : ControllerBase
  {

    static IRepo<Products> irepoObj;
    [HttpGet]
    [Route("GetAllData")]
    public ActionResult GetAllProducts()
    {
      var products = new List<Products>();
      try
      {
        if (irepoObj == null)
        {
          irepoObj = CommonAutoFac<Repo<Products>, IRepo<Products>>.GetAtuFacInstance();
        }
        var data=irepoObj.GetAll();
        products= data.ToList<Products>();
        return Ok(products);
      }
      catch (Exception ex)
      {
        return Ok(ex);
      }
    }
  }
}
