**Hola!!**

He creado una base de datos de patines, donde puedes ver las guías que puede utilizar cada patín y las ruedas que corresponden a cada guía.

**Te explico un poco el concepto de esta base de datos**:

Un patín puede utilizar varias guías, sin embargo cada guía solo sirve para un modelo determinado de patín.

Las guías, en función de su tamaño, pueden utilizar muchas tallas de ruedas, por lo que una talla de rueda puede ser utilizada por muchas guías.

## Para crear esta API he utilizado:

- **Node.js**: para el manejo de backend.
- **Express**: para el servidor.
- **MySQL**: para crear la base de datos.

## Pasos a seguir para utilizar la API

1. **Clónate** el repositorio `git clone git@github.com:Adalab/modulo-4-evaluacion-final-bpw-Nuria8890.git`.
2. Instala las **dependencias locales** ejecutando en la terminal `npm install`.
3. Copia el código de la carpeta `db` en workbench o similar.
4. Crea un archivo `.env` en la raíz del proyecto con las variables necesarias (estas se encuentran en el archivo `.env_example`).
5. Inicia el servidor de desarrollo ejecutando `npm run dev`.
6. Utiliza Postman o similiar para ejecutar los endpoints.

## Acciones que puedes realizar en esta base de datos (endpoints):

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

- Si has rellenado los datos, te devolverá:

```javascript
// Ejemplo
{
    "status": "success",
    "id": 5 // identificador del nuevo patín añadido
}
```

- Si no rellenas los datos, te devolverá:

```javascript
{
    "status": "error",
    "message": "Asegúrate de que has introducido todos los datos (brand y model)"
}
```

## Listar todos los patines con sus guías y ruedas

- La ruta para ver este listado es `http://localhost:número-de-puerto/api/skates`
- Te devolverá estos datos:

```javascript
// Ejemplo
{
    "status": "success",
    "message": [
         {
            "idSkate": 3,
            "brand": "powerslide",
            "model": "slalom",
            "guidesAndWheels": [
                {
                    "idGuide": 4,
                    "brandGuide": "wur",
                    "sizeGuide": 80,
                    "idWheel": 3,
                    "brandWheel": "rollerblade",
                    "sizeWheel": 80
                },
                {
                    "idGuide": 4,
                    "brandGuide": "wur",
                    "sizeGuide": 80,
                    "idWheel": 4,
                    "brandWheel": "powerslide",
                    "sizeWheel": 72
                }
            ]
        }
    ]
}
```

## Actualizar los datos de un patín

- La ruta para poder actualizar los datos es `http://localhost:número-de-puerto/api/updateSkate/:idSkate` donde `:idSkate` será el número del id del patín que quieras actualizar
- Te devolverá estos datos:

```javascript
{
    "status": "success",
    "message": "Update skate"
}
```

## Eliminar el registro de un patín

- La ruta para eliminar un registro es `http://localhost:número-de-puerto/api/deleteSkate/:idSkate` donde `:idSkate` será el número del id del patín que quieras eliminar

- Te devolverá estos datos:

```javascript
{
    "status": "success",
    "message": "Delete skate"
}
```

---

**Gracias por interesarte en mi trabajo ❤️**

Nuria 🐜
