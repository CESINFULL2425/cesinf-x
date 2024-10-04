# Metodología de Desarrollo Web del CESINF-X

Este informe detalla la metodología de trabajo que se seguirá en el desarrollo de la web del CESINF-X. El objetivo principal es establecer un flujo de trabajo eficiente, colaborativo y transparente, asegurando la calidad del producto final.

## Organización del Proyecto

- **Repositorio Principal:** Se utilizará un repositorio central en GitHub para almacenar el código fuente del proyecto.
- **Proyectos en GitHub:** Cada funcionalidad o característica del proyecto se gestionará en proyectos individuales dentro de GitHub.
- **Kanban:** Se implementará un tablero Kanban en cada proyecto para visualizar el estado de las tareas. Las tareas se clasificarán en cuatro estados:
  - _To-Do_: Tareas pendientes de iniciar.
  - _Doing_: Tareas en progreso.
  - _Waiting revision_: Tareas esperando revisión.
  - _Done_: Tareas completadas y revisadas.

## Flujo de Trabajo

1. **Creación de Issues:**

   - Se crearán issues para cada tarea o funcionalidad requerida.
   - Las issues incluirán una descripción detallada, etiquetas para categorización y asignación de responsables.

2. **Creación de Ramas:**

   - Antes de comenzar a trabajar en una issue, se creará una nueva rama desde la rama principal (main).
   - El nombre de la rama debe ser descriptivo y relacionado con la issue.

3. **Desarrollo:**

   - Los desarrolladores trabajarán en sus respectivas ramas, implementando las funcionalidades correspondientes.
   - Se realizarán commits frecuentes con mensajes claros y concisos.

4. **Pair Programming (opcional):**

   - Durante las reuniones semanales, se intentará dedicar tiempo al pair programming para compartir conocimientos, resolver problemas y mejorar la calidad del código.

5. **Pull Requests:**

   - Una vez completada una tarea, se creará un pull request para fusionar los cambios de la rama de desarrollo a la rama principal.
   - El pull request incluirá una descripción detallada de los cambios realizados y se asignará a un revisor.

6. **Revisión de Código:**

   - El revisor evaluará el código, asegurándose de que cumple con los estándares de calidad y que no introduce regresiones.
   - Se podrán solicitar cambios o solicitar más información al desarrollador.

7. **Fusión:**

   - Si la revisión es exitosa, el revisor fusionará los cambios a la rama principal.

8. **Despliegue Automático:**

   - El servicio de hosting se encargará de desplegar automáticamente la aplicación a producción cada vez que se realicen commits en la rama main.
   - Además, se generarán URLs de preproducción para cada pull request, permitiendo visualizar los cambios antes de la fusión.

## Reuniones Semanales

- **Frecuencia:** Se realizarán reuniones semanales de 1-2 horas de duración.
- **Objetivos:**
  - Revisar el progreso del proyecto.
  - Identificar y resolver bloqueos.
  - Planificar las próximas tareas.
  - Realizar pair programming cuando sea posible.
