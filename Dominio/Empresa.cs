using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
  public  class Empresa
    {
        public int ID { get; set; }
        public string RazonSocial { get; set; }
        public string Telefono { get; set; }
        public int IDDireccion { get; set; }
        public int IDCategoriaEmpresa { get; set; }

    }
}
