//Definir un metodo dentro de un Objeto

/* const cliente = {
  nombre: "Hypermarket",
  direccion: "C/Las Habas 14",
  ciudad: "MarketCity",
  facturacion: "€23.000",
  facturasPendientes: true,
  empleados: {
    finanzas: "Jose Maria Angulo",
    compras: "Maria Asap",
    logistica: "Ramon Oltra",
    CTO: "Carlos Urquijo",
  },
  reclamar() {
    console.log(`
          A la atención del sr. ${this.empleados.finanzas}, 
        La presente carta es para recordarle, que según nuestros registros, 
        la cantidad de ${this.facturacion} figura pendiente desde Marzo.
  
        Le rogamos nos indique la fecha de su liquidación
        Saludos cordiales,
  
        Concepcion Cifuentes, Directora de créditos
  
        xxxx, 
        dirección : ${this.nombre} 
                    ${this.direccion}
                    ${this.ciudad}
      `);
  },
};

cliente.reclamar()
 */
//Quizás tendría mas sentido definir una clase, e incluir el método reclamar en la clase

/* const cliente = {
  nombre: "Hypermarket",
  direccion: "C/Las Habas 14",
  ciudad: "MarketCity",
  facturacion: "€23.000",
  facturasPendientes: true,
  empleados: {
    finanzas: "Jose Maria Angulo",
    compras: "Maria Asap",
    logistica: "Ramon Oltra",
    CTO: "Carlos Urquijo",
  },
};

cliente.reclamar = () => {
  console.log(`
            A la atención del sr. ${cliente.empleados.finanzas}, 
          La presente carta es para recordarle, que según nuestros registros, 
          la cantidad de ${cliente.facturacion} figura pendiente desde Marzo.
    
          Le rogamos nos indique la fecha de su liquidación
          Saludos cordiales,
    
          Concepcion Cifuentes, Directora de créditos
    
          xxxx, 
          dirección : ${cliente.nombre} 
                      ${cliente.direccion}
                      ${cliente.ciudad}
        `);
};

cliente.reclamar(); */
