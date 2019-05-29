using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ShopperStop.Common;
using ShopperStop.DataLayer;
using ShopperStop.DataLayer.Interface;
using ShopperStop.Models.CommonModel;
using ShopperStop.Models.DB;
using ShopperStop.Models.RequestParamModel;
using static System.Net.Mime.MediaTypeNames;

namespace ShopperStop.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [EnableCors("EnableCORS")]
  public class ProductsController : ControllerBase
  {
    static IRepo<Products> irepoObj;
    [HttpPost]
    [Route("InsertProduct")]
    public ActionResult Insert([FromBody]ProductModel model)
    {
      if (irepoObj == null)
      {
        irepoObj = CommonAutoFac<Repo<Products>, IRepo<Products>>.GetAtuFacInstance();
      }
      var pro = new Products() { ProductName = model.ProductName, ReorderLevel = model.ReorderLevel, QuantityPerUnit = model.QuantityPerUnit, Discontinued = model.Discontinued, UnitPrice = model.UnitPrice, UnitsInStock = model.UnitsInStock, UnitsOnOrder = model.UnitsOnOrder };
      irepoObj.Insert(pro);
      int id = pro.ProductId;
      SaveBase64ImgToFolder(id, model.ImagePath);
      var resp = new ReturnResponse { httpResponseCode = Convert.ToInt32(HttpStatusCode.OK), message= "success"};
      return Ok(resp);
    }
    public bool SaveBase64ImgToFolder(int productid, string base64)
    {
      byte[] data = System.Convert.FromBase64String(base64);
    
      MemoryStream ms = new MemoryStream(data);
      string fileName = "productimg" + productid + ".jpg";
      var pathToData = Path.GetFullPath(Path.Combine("Assets/ProductImg"));
      System.IO.File.WriteAllBytes(pathToData + "/" + fileName, data);
      
      return true;
    }

    [HttpGet]
    [Route("GetProduct")]
    public ActionResult GetAllData()
    {
      if (irepoObj == null)
      {
        irepoObj = CommonAutoFac<Repo<Products>, IRepo<Products>>.GetAtuFacInstance();
      }
      var list=irepoObj.GetAll().Where(x=>x.Discontinued==false).Select(s=> new { s.ProductId,s.ProductName,s.QuantityPerUnit,s.ReorderLevel,s.UnitPrice,s.UnitsInStock }).ToList();
       return Ok(list);
    }
    [HttpGet]
    [Route("GetProductImage/{proid}")]
    public IActionResult Get(int proid)
    {
      string fileName = "productimg" + proid + ".jpg";
      var pathToData = Path.GetFullPath(Path.Combine("Assets/ProductImg"));
      var fullPathWithFileName = pathToData + "/" + fileName;
      Byte[] byetImg = System.IO.File.ReadAllBytes(fullPathWithFileName);
      return File(byetImg, "image/jpeg");
    }

  
    }
  }

