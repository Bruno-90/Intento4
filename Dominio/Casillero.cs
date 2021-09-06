using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
   public class Casillero
    {
        public int ID { get; set; }
        public string Descripcion { get; set; }
        public int IDRack { get; set; }
        bool Estado { get; set; }
    }
}
