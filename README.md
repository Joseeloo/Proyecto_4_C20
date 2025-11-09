# Proyecto 4: API de Reservas Hoteleras – DWFS C20

> API RESTful desarrollada con Node.js y Express para la gestión de reservas hoteleras.
Incluye operaciones CRUD completas, filtros de búsqueda, documentación Swagger y arquitectura modular profesional.
Proyecto desarrollado para el Módulo 4 del Bootcamp: Desarrollo Web Full Stack (UDD 2025).

# Índice

- [Introducción general](#introducción-general)
- [Arquitectura del proyecto](#arquitectura-del-proyecto)
- [Componentes principales](#componentes-principales)
- [Servicios CRUD y Filtros](#servicios-crud-y-filtros)
- [Documentación Swagger](#documentación-swagger)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Control de versiones](#control-de-versiones)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Estado del proyecto](#estado-del-proyecto)

# Introducción general

El proyecto API de Reservas Hoteleras simula un sistema backend para la administración de reservas en hoteles.
Permite crear, leer, actualizar, eliminar y filtrar reservas mediante endpoints RESTful.

La aplicación está construida con Node.js y Express, siguiendo un modelo por capas (config, controllers, services, models, utils) que separa responsabilidades de manera clara y escalable.

Además, la API cuenta con documentación interactiva Swagger/OpenAPI, disponible en /api-docs, donde se pueden probar todos los endpoints.

# Arquitectura del proyecto

La arquitectura se diseñó siguiendo buenas prácticas de desarrollo backend:
- config/ → configuración de entorno y rutas base.
- controllers/ → manejo de las solicitudes HTTP y respuestas.
- services/ → lógica de negocio y validaciones.
- models/ → definición de la estructura de los datos (Reserva).
- utils/ → funciones auxiliares para manejo de archivos y fechas.
- docs/ → definición Swagger para la documentación de la API.
- data/ → almacenamiento persistente de reservas en formato JSON.

# Componentes principales
### Express Server
Servidor HTTP que gestiona todas las rutas del proyecto (src/main.js).

### Controladores (controllers)
Reciben la solicitud, llaman al servicio correspondiente y devuelven respuestas con formato estándar:
```
{
  "message": "Reserva creada con éxito.",
  "statusCode": 201,
  "data": { ... }
}
```

### Servicios (services)
Contienen la lógica principal:
- Crear una nueva reserva con uuid.
- Leer y escribir en el archivo JSON.
- Filtrar reservas según criterios dinámicos.

### Modelo (models/Reserva.model.js)
Define la estructura y validación mínima de los campos de cada reserva:
- hotel
- fecha_inicio / fecha_fin
- tipo_habitacion
- num_huespedes
- estado
- nombre_cliente
- email_cliente

### Utilidades (utils)
- reservas.utils.js: lectura/escritura del archivo reservas.json.
- date.utils.js: validación y comparación de fechas (isWithinRange, isValidDate, etc.).

### Documentación (docs/swaggerDocs.js)
- Contiene el objeto OpenAPI que describe todos los endpoints CRUD, filtros y esquemas de datos.

# Servicios CRUD y Filtros
| Método     | Endpoint            | Descripción                                  |
| ---------- | ------------------- | -------------------------------------------- |
| **POST**   | `/api/reservas`     | Crear una nueva reserva.                     |
| **GET**    | `/api/reservas`     | Listar todas las reservas o aplicar filtros. |
| **GET**    | `/api/reservas/:id` | Obtener una reserva específica.              |
| **PUT**    | `/api/reservas/:id` | Actualizar datos de una reserva existente.   |
| **DELETE** | `/api/reservas/:id` | Eliminar una reserva por ID.                 |



# Filtros disponibles (GET /api/reservas)
Permite combinaciones múltiples mediante parámetros query:
| Parámetro                    | Ejemplo                                         | Descripción                               |
| ---------------------------- | ----------------------------------------------- | ----------------------------------------- |
| `hotel`                      | `?hotel=Hotel Paraiso`                          | Filtra por nombre de hotel.               |
| `fecha_inicio` + `fecha_fin` | `?fecha_inicio=2025-05-01&fecha_fin=2025-05-31` | Filtra por rango de fechas.               |
| `tipo_habitacion`            | `?tipo_habitacion=suite`                        | Filtra por tipo de habitación.            |
| `estado`                     | `?estado=pendiente_pago`                        | Filtra por estado actual.                 |
| `num_huespedes`              | `?num_huespedes=5`                              | Filtra reservas con al menos N huéspedes. |

# Documentación Swagger
La API está documentada bajo el estándar OpenAPI 3.0 y visualizada con Swagger UI.
- URL local: http://localhost:3000/api-docs
- URL en Render: (se agregará tras el despliegue)

Desde esta interfaz se puede:
- Explorar todos los endpoints.
- Ver ejemplos de request/response.
- Ejecutar operaciones directamente desde el navegador.

# Estructura de carpetas
```
📁 proyecto4-DWFS
├── 📁 src
│   ├── 📁 config → env.config.js
│   ├── 📁 controllers → reservas.controller.js
│   ├── 📁 data → reservas.json
│   ├── 📁 docs → swaggerDocs.js
│   ├── 📁 models → Reservas.model.js
│   ├── 📁 routers → reservas.routes.js
│   ├── 📁 services → reservas.service.js
│   └── 📁 utils → reservas.utils.js / date.utils.js
├── 📄 .env.template
├── 📄 .gitignore
├── 📄 package.json
└── 📄 README.md
```
### Estructura en Visual Studio Code
<img width="275" height="470" alt="image" src="https://github.com/user-attachments/assets/78bdff20-39e6-4368-bda6-b0676f850200" />

# Instalación y ejecución
### 1. Clonar el repositorio
```
git clone https://github.com/Joseeloo/Proyecto_4_C20.git
cd Proyecto_4_C20
```

### 2. Instalar dependencias
```
npm install
```

### 3. Configurar variables de entorno
> Crear un archivo .env a partir de .env.template:

```
PORT=3000
RESERVAS_PATH=src/data/reservas.json
SERVER_URL=http://localhost:3000
```

### 4. Ejecutar el proyecto
Modo desarrollo:
```
npm run start:dev
```

Modo producción:
```
npm run start:prod
```

### 5. Acceder a la API
- API base: http://localhost:3000/api/reservas
- Swagger Docs: http://localhost:3000/api-docs

# Control de versiones
- Repositorio individual:
```
https://github.com/Joseeloo/Proyecto_4_C20
```
- Flujo de commits limpio (init, swagger, fix, deploy, etc.).
- .gitignore configurado para excluir node_modules/ y variables sensibles (.env).

# Tecnologías utilizadas
- Categoría	Herramienta / Librería
- Lenguaje	JavaScript (ESM)
- Entorno	Node.js
- Framework	Express
- Documentación API	Swagger UI Express
- Utilidades	dotenv, uuid, fs/promises
- Control de versiones	Git + GitHub
- Despliegue	Render.com

# Estado del proyecto
Cumple con todos los requisitos mínimos y entregables:
| Criterio              | Cumple | Evidencia                             |
| --------------------- | ------ | ------------------------------------- |
| Proyecto individual   | ✅      | Desarrollo propio                     |
| Arquitectura clara    | ✅      | Estructura modular por capas          |
| CRUD completo         | ✅      | Endpoints funcionales                 |
| Filtros múltiples     | ✅      | Implementados en GET con query params |
| Persistencia          | ✅      | Archivo JSON (`reservas.json`)        |
| Documentación         | ✅      | Swagger en `/api-docs`                |
| Control de versiones  | ✅      | Repositorio GitHub                    |
| Despliegue (opcional) | ✅     | [Render](https://proyecto-4-c20.onrender.com)                   |

# Resultados


---

**Autor:** José Esteban  
**Fecha de entrega:** 10-11-2025
