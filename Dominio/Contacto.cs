using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
  public  class Contacto
    {
        public int ID { get; set; }
        public int IDContacto { get; set; }
        public string   Nommbre { get; set; }
        public string Apellido { get; set; }
        public string Telefono { get; set; }
        public string Mail { get; set; }
        public int Descripcion { get; set; }
    }
}
