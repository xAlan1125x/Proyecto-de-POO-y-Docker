# CRUD de Aeroplanos - Full Stack Dockerizado

Este proyecto consiste en una aplicación Full Stack que gestiona una flota de aeroplanos. Implementa conceptos avanzados de Programación Orientada a Objetos (POO), persistencia volátil mediante una API REST y despliegue mediante contenedores.

## 🚀 Funcionalidades (CRUD)
La aplicación permite realizar las siguientes operaciones:
- **Create (Crear):** Agregar nuevos aeroplanos especificando hélices y configuración de alas.
- **Read (Leer):** Visualizar la flota completa de aeroplanos en tiempo real.
- **Delete (Borrar):** Eliminar aeroplanos de la flota.

## 🏗️ Arquitectura y POO
Se han aplicado relaciones de objetos según los requerimientos:
- **Composición (Relación Fuerte):** Las clases `TrenAterrizaje` y `Cubierta` se instancian dentro del constructor de la clase `Aeroplano`. Su ciclo de vida depende totalmente del objeto padre.
- **Agregación (Relación Débil):** Las clases `Helice` y `Alas` se pasan como parámetros al constructor, existiendo independientemente del `Aeroplano`.
- **Asociación Simple:** Implementada en métodos de interacción con entidades externas (como la torre de control).

## 🛠️ Tecnologías Utilizadas
- **Backend:** Node.js con TypeScript.
- **Frontend:** HTML5, CSS3 y JavaScript vanilla.
- **Contenedores:** Docker y Docker Compose.
- **Servidor Web:** Nginx (para el frontend).

## Estructura del proyecto
PROYECTO POO Y DOCKER
├── backend
│   ├── src
│   │   ├── app.ts         # Servidor Express y endpoints CRUD
│   │   └── models.ts      # Clases con lógica de Composición y Agregación
│   ├── Dockerfile         # Configuración de imagen Node.js + TypeScript
│   ├── package.json       # Dependencias y scripts
│   └── tsconfig.json      # Configuración del compilador TS
├── frontend
│   ├── index.html         # Interfaz de usuario (consumo de API)
│   └── Dockerfile         # Configuración de servidor Nginx
├── .gitignore             # Exclusión de node_modules y archivos locales
├── docker-compose.yml     # Orquestación de servicios (API + Web)
└── README.md              # Documentación del proyecto


## 📦 Instalación y Despliegue
Para ejecutar este proyecto localmente, asegúrese de tener instalado [Docker Desktop](https://www.docker.com/products/docker-desktop/).

1. Clone el repositorio:
   
   git clone https://github.com/xAlan1125x/Proyecto-de-POO-y-Docker.git

2. Lanzar la aplicación en Docker:
    Asegúrese de tener Docker desktop abierto y ejecute el siguiente comando en la terminal en el directorio raíz del programa:

    docker-compose up --build

        Este comando descargará las imágenes necesarias, instalará las dependencias y compilará el código TypeScript automáticamente.

3. Acceso a la aplicación:

    Frontend (Interfaz): Abrí tu navegador en http://localhost:8080

    Backend (API JSON): Podés verificar los datos en http://localhost:3000/aeroplanos

4. Finalizar ejecución:
    Para detener los contenedores, presione Ctrl + C en la terminal o ejecute:

        docker-compose down