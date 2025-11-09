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
- URL en Render: https://proyecto-4-c20.onrender.com/api-docs/

<img width="1919" height="942" alt="image" src="https://github.com/user-attachments/assets/abf83775-8401-4396-87a4-3c492780a9e3" />

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
| Categoría | Herramienta / Librería |
|------------|------------------------|
| Lenguaje | JavaScript (ESM) |
| Entorno | Node.js |
| Framework | Express |
| Documentación API | Swagger UI Express |
| Utilidades | dotenv, uuid, fs/promises |
| Control de versiones | Git + GitHub |
| Despliegue | Render.com |


# Estado del proyecto
Cumple con todos los requisitos mínimos y entregables:
| Criterio              | Cumple | Evidencia                             |
| --------------------- | ------ | ------------------------------------- |
| Proyecto individual   |    ✅   | Desarrollo propio                     |
| Arquitectura clara    |    ✅   | Estructura modular por capas          |
| CRUD completo         |    ✅   | Endpoints funcionales                 |
| Filtros múltiples     |    ✅   | Implementados en GET con query params |
| Persistencia          |    ✅   | Archivo JSON (`reservas.json`)        |
| Documentación         |    ✅   | Swagger en `/api-docs`                |
| Control de versiones  |    ✅   | Repositorio GitHub                    |
| Despliegue            |    ✅   | [Render](https://proyecto-4-c20.onrender.com/api-docs/)                   |

# Resultados Consultas
### 1. Verificar conexión del servidor
**Método:** GET

**URL:**
```
http://localhost:3000/
```
<img width="1553" height="268" alt="image" src="https://github.com/user-attachments/assets/78acaaae-cca2-42c0-ba62-c07542e851cc" />

### 2. Crear nueva reserva
**Método:** POST

**URL:**
```
http://localhost:3000/api/reservas
```
**Body (JSON):**
```
{
  "hotel": "Hotel TEST",
  "fecha_inicio": "2025-12-11",
  "fecha_fin": "2025-12-25",
  "tipo_habitacion": "suite",
  "num_huespedes": 2,
  "estado": "pendiente_pago",
  "nombre_cliente": "María Carreño",
  "email_cliente": "maria.carreño@example.com"
}
```
<img width="1548" height="635" alt="image" src="https://github.com/user-attachments/assets/4a8cabbb-11ff-4981-ae91-6c4f839761f4" />

### 3. Listar todas las reservas
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas
```
<img width="1547" height="633" alt="image" src="https://github.com/user-attachments/assets/a234c45b-9d64-47c4-9eed-3a19324d5164" />

### 4. Obtener una reserva específica
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas/<ID_DE_LA_RESERVA>
```
<img width="1549" height="520" alt="image" src="https://github.com/user-attachments/assets/3e534a0d-da80-4ebc-9d2b-6a1136a610d7" />

### 5. Actualizar una reserva existente
**Método:** PUT

**URL:**
```
http://localhost:3000/api/reservas/<ID_DE_LA_RESERVA>
```
**Body (JSON):**
```
{
  "estado": "confirmada",
  "tipo_habitacion": "familiar",
  "num_huespedes": 5
}
```
<img width="1548" height="633" alt="image" src="https://github.com/user-attachments/assets/b05be950-386a-4334-8eeb-4bcab28ee70a" />

### 6. Eliminar una reserva
**Método:** DELETE

**URL:**
```
http://localhost:3000/api/reservas/<ID_DE_LA_RESERVA>
```
<img width="1547" height="286" alt="image" src="https://github.com/user-attachments/assets/1ec440d9-38aa-4eea-af06-bf2772f4de42" />


# Resultados Filtros

### Filtro 1: Por hotel
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas?hotel=Hotel Paraiso
```
<img width="1553" height="636" alt="image" src="https://github.com/user-attachments/assets/e14dd1df-ec99-4f06-8e07-fbce6695fecd" />

### Filtro 2: Por rango de fechas
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas?fecha_inicio=2025-05-01&fecha_fin=2025-05-31
```
<img width="1545" height="636" alt="image" src="https://github.com/user-attachments/assets/e257e956-a94b-443c-b031-d4005badfe95" />

### Filtro 3: Por tipo de habitación
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas?tipo_habitacion=suite
```
<img width="1543" height="627" alt="image" src="https://github.com/user-attachments/assets/ed17a3b2-c2a8-49ba-b34d-f5b2bd7dc80d" />

### Filtro 4: Por estado
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas?estado=pendiente_pago
```
<img width="1545" height="629" alt="image" src="https://github.com/user-attachments/assets/bc9c0312-0e2c-4893-aafb-af86e6dd0add" />

### Filtro 5: Por número de huéspedes
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas?num_huespedes=5
```
<img width="1552" height="636" alt="image" src="https://github.com/user-attachments/assets/5439945d-fa6a-4b1f-8918-0905831e4571" />

### Errores esperados
**Método:** GET

**URL:**
```
http://localhost:3000/api/reservas/999999
```
<img width="1547" height="283" alt="image" src="https://github.com/user-attachments/assets/06af78eb-6c9e-4c8b-8d3c-5d4fe60bac9b" />

### Despliegue en Render
La API se encuentra desplegada y funcionando en la nube a través de **Render.com**.

**Enlace base:** 
- [https://proyecto-4-c20.onrender.com](https://proyecto-4-c20.onrender.com)

**Documentación Swagger:**  
- [https://proyecto-4-c20.onrender.com/api-docs](https://proyecto-4-c20.onrender.com/api-docs)

> Puedes probar los endpoints directamente desde la interfaz Swagger sin necesidad de Postman o Thunder Client.


---

**Autor:** José Esteban  
**Fecha de entrega:** 10-11-2025
