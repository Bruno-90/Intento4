using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
  public   class Usuario
    {
        public int ID { get; set; }
        public string Nick { get; set; }
        public string Contraseña { get; set; }
        public int IDContacto { get; set; }
        public int IDDepartamento { get; set; }
        public int IDPermiso { get; set; }
    }
}
