# Matriculas - Gestión de Cursos y Matrículas

Este proyecto es una aplicación web desarrollada en **React** para la gestión de cursos y matrículas de estudiantes. Permite visualizar los cursos disponibles, seleccionar cursos según los créditos permitidos y confirmar la matrícula.

## Instrucciones para ejecutar la aplicación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/StivenCatalan/matriculas
   cd matriculas
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   ```

3. **Ejecuta la aplicación en modo desarrollo:**

   npm run dev

   ```
   La aplicación estará disponible en [http://localhost:](http://localhost:5173/).
   ```

## Decisiones tomadas durante el desarrollo

- **Componentización:** Se dividió la interfaz en componentes reutilizables (`CursoCard`, `Matricula`, etc.) para facilitar el mantenimiento y la escalabilidad.
- **Estado local y hooks personalizados:** Se utiliza el hook `useMatricula` para manejar la lógica de selección, confirmación y eliminación de cursos, manteniendo el código limpio y separado de la presentación.
Decidi tomar este camino gracias a mi experiencia utilizando el marco de travajo (MVC).
- **Validaciones:** Se implementaron validaciones para evitar que el estudiante supere los créditos permitidos, seleccione cursos repetidos o matricule cursos sin cupos disponibles.
- **Estilos:** Se emplearon clases CSS para una interfaz clara y responsiva.
- **Datos simulados:** Los datos de cursos y estudiantes se cargan desde archivos JSON para facilitar pruebas y desarrollo sin necesidad de un backend.

## Requisitos

- Node.js >= 20
- npm >= 6

**lINK app netlify** = "https://scmatricula.netlify.app/"
---