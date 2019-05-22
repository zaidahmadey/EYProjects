using Autofac;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ShopperStop.Common
{
  public class CommonAutoFac<classObj,interfaceObj>
  {
    public interfaceObj GetAtuFacInstance()
    {
      var builder = new ContainerBuilder();
      builder.RegisterType<classObj>().As<interfaceObj>();
      var container = builder.Build();
      var service = container.Resolve<interfaceObj>();
      return service;
    }
  }
}
