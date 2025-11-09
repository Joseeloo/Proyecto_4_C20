export class Reserva {
  constructor({
    id,
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    num_huespedes,
    estado = 'pendiente_pago',
    nombre_cliente,
    email_cliente,
  }) {
    this.id = id;
    this.hotel = hotel;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.tipo_habitacion = tipo_habitacion;
    this.num_huespedes = Number(num_huespedes);
    this.estado = estado;
    this.nombre_cliente = nombre_cliente;
    this.email_cliente = email_cliente;
  }

  toJSON() {
    return {
      id: this.id,
      hotel: this.hotel,
      fecha_inicio: this.fecha_inicio,
      fecha_fin: this.fecha_fin,
      tipo_habitacion: this.tipo_habitacion,
      num_huespedes: this.num_huespedes,
      estado: this.estado,
      nombre_cliente: this.nombre_cliente,
      email_cliente: this.email_cliente,
    };
  }
}
