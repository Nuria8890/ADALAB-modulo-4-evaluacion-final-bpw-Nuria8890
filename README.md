**Hola!!**

- Node.js y Express: Para manejar la lógica del servidor y las API.
- MySQL: Base de datos para almacenamiento persistente.

1. Clónate el repositorio `git clone git@github.com:Adalab/modulo-4-evaluacion-final-bpw-Nuria8890.git`
2. Instala las dependencias locales ejecutando en la terminal `npm install`
3. Copia el código de la carpeta db en workbench o similar
4. Tienes que tener instalado [Node JS](https://nodejs.org/) con una versión superior a la 14
5. Crea un archivo `.env` en la raíz del proyecto con las variables necesarias (estas se encuentran en el archivo `.env_example`).
6. Inicia el servidor de desarrollo `npm run dev`
7. Utiliza Postman o similiar para ejecutar los endpoints:

## Endpoints que puedes ejecutar

### Añadir un nuevo patín

- La ruta para añadir un nuevo patín es `http://localhost:número-de-puerto/api/skate`
- Tienes que añadir la marca y el modelo de patín:

```javascript
// Ejemplo
{
    "brand": "marca-1",
    "model": "modelo-1"
}
```

- Te devolverá estos datos, donde `5` es el id del nuevo patín añadido:

```javascript
{
    "status": "success",
    "id": 5
}
```

## Listar todos los patines con sus guías y ruedas

- La ruta para ver este listado es `http://localhost:número-de-puerto/api/skates`
- Te devolverá estos datos:

```javascript
{
    "status": "En proceso",
    "message": [
        {
            "idSkate": 1,
            "brand": "luigino",
            "model": "velocidad",
            "guidesAndWheels": [
                {
                    "idGuide": 1,
                    "brandGuide": "fr",
                    "sizeGuide": 125,
                    "idWheel": 1,
                    "brandWheel": "luigino",
                    "sizeWheel": 110
                },
                {
                    "idGuide": 1,
                    "brandGuide": "fr",
                    "sizeGuide": 125,
                    "idWheel": 2,
                    "brandWheel": "luigino",
                    "sizeWheel": 125
                },
                {
                    "idGuide": 1,
                    "brandGuide": "fr",
                    "sizeGuide": 125,
                    "idWheel": 3,
                    "brandWheel": "rollerblade",
                    "sizeWheel": 80
                },
                {
                    "idGuide": 1,
                    "brandGuide": "fr",
                    "sizeGuide": 125,
                    "idWheel": 4,
                    "brandWheel": "powerslide",
                    "sizeWheel": 72
                },
                {
                    "idGuide": 2,
                    "brandGuide": "rollerblade",
                    "sizeGuide": 110,
                    "idWheel": 1,
                    "brandWheel": "luigino",
                    "sizeWheel": 110
                },
                {
                    "idGuide": 2,
                    "brandGuide": "rollerblade",
                    "sizeGuide": 110,
                    "idWheel": 3,
                    "brandWheel": "rollerblade",
                    "sizeWheel": 80
                },
                {
                    "idGuide": 2,
                    "brandGuide": "rollerblade",
                    "sizeGuide": 110,
                    "idWheel": 4,
                    "brandWheel": "powerslide",
                    "sizeWheel": 72
                }
            ]
        }
    ]
}
```

---

**Gracias por interesarte en mi trabajo ❤️**

Nuria 🐜
