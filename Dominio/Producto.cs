using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
   public class Producto
    {
        public int ID { get; set; }
        public int IDProductoPreCargado { get; set; }
        public string Lote { get; set; }
        public int Cod { get; set; }
        public int IDIngreso { get; set; }
        public DateTime Vencimiento { get; set; }
    }
}
