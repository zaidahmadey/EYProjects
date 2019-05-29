
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web.Http;
using System.Web.Http.Cors;

namespace temp.Controllers
{
  [EnableCors(origins: "*", headers: "*", methods: "*")]
  [RoutePrefix("api/test")]
  public class ValuesController : ApiController
  {

    [HttpGet]
    [Route("test")]
    public HttpResponseMessage GetImgTest()
    {
      List<category> cl = new List<category>();
      category c = new category();
      c.categoryId = 1;
      c.categoryName = "zaid";
      Dictionary<int, string> category = new Dictionary<int, string>();
      category.Add(1, "Zaid");
      category.Add(2, "Fahad");
      cl.Add(c);
      return Request.CreateResponse(HttpStatusCode.Created, cl);
    }
  }
  internal class category
  {
    public int categoryId { get; set; }
    public string categoryName { get; set; }
  }
}
