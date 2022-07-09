export interface AlmacenPrincipal {
    id                :  number,
    id_sucursal       :  number,
    id_producto       :  number,
    cantidad          :  number,
    cantidad_minima   :  number,
    vencimiento       :  boolean,
    fecha_vencimiento : Date,
    estado            :  boolean,

    /*REFERENCIAS */
    producto          :  string,
    categoria         :  string,
    unidad            :  string,

  }


  
  
