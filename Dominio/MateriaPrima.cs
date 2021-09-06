using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
   public  class MateriaPrima
    {
        public int ID { get; set; }
        public string Lote { get; set; }
        public string Analisis { get; set; }
        public int Codigo { get; set; }
        public DateTime Vencimiento { get; set; }
        public int IDIngreso { get; set; }
        public int IDInsumo { get; set; }
        public int IDEstado { get; set; }
        public int Cantidad { get; set; }

    }
}
