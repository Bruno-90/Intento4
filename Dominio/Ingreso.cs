using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dominio
{
   public class Ingreso
    {
        public int ID { get; set; }
        public string Remito { get; set; }
        public DateTime Fecha { get; set; }
        public int IDUsuario { get; set; }
        public int IDEmpresa { get; set; }
        public int Cod { get; set; }
        public bool Estado { get; set; }
       
    }
}
