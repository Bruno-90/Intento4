using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
   public class ProductoDet
    {
        public int ID { get; set; }
        public int IDInsumo { get; set; }
        public int IDProducto { get; set; }
        public int Cantidad { get; set; }
        public string Detalle { get; set; }
        public DateTime Vencimiento { get; set; }
    }
}
