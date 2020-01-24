import {Entity, model, property, Model} from '@loopback/repository';

@model()
export class Usuario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: false,
    required: true,
  })
  usu_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  clave: string;

  @property({
    type: 'number',
    required: true,
  })
  identificacion: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  activo: string;

  @property({
    type: 'string',
  })
  usu_creador?: string;

  @property({
    type: 'date',
  })
  fecha_creacion?: string;

  @property({
    type: 'string',
  })
  usu_modificador?: string;

  @property({
    type: 'date',
  })
  fecha_modificacion?: string;

  @property({
    type: 'number',
  })
  tius_id?: number;


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  // describe navigational properties here
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
