using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopperStop.DataLayer;
using ShopperStop.DataLayer.Interface;
using ShopperStop.Models.DB;

namespace ShopperStop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   [EnableCors("EnableCORS")]
  public class CategoryController : ControllerBase
    {
    IRepo<Categories> irepoObj;

    /// <summary>
    /// Get All Categories
    /// </summary>
    /// <returns></returns>
    [HttpGet]
    [Route("GetAll")]
    public ActionResult GetAllCategories()
    {
     var test= Request.Headers["ContentType"];
      var zaid = Request.Headers["UserName"];
      var testst = Request.Headers["Access-Control-Allow-Origin"];//;: '*',

      if (irepoObj == null)
      {
        irepoObj = Common.CommonAutoFac<Repo<Categories>, IRepo<Categories>>.GetAtuFacInstance();
      }
      var list=irepoObj.GetAll();
      var returnlist=list.Select(s => new { s.CategoryId, s.CategoryName }).ToList();
      //return Ok(returnlist);'
      string jsonStr = Newtonsoft.Json.JsonConvert.SerializeObject(returnlist);
      return Ok(returnlist);
    }
  }
}
