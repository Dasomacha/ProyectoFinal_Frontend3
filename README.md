# Proyecto de React + Vite: Explorador de Pokémon

Este proyecto es una aplicación web desarrollada con **React** y **Vite** que permite explorar una lista de Pokémon, ver información detallada sobre ellos y gestionar favoritos. Los datos se obtienen desde la API pública [PokéAPI](https://pokeapi.co/).

## Características

- **Lista de Pokémon:** Obtiene y muestra información de 180 Pokémon.
- **Información detallada:** Cada tarjeta permite acceder a más información del Pokémon seleccionado.
- **Gestión de favoritos:** Los usuarios pueden marcar Pokémon como favoritos y verlos en una lista separada.
- **Interfaz interactiva:** Diseño limpio y adaptativo, utilizando componentes reutilizables.

---

## Tecnologías utilizadas

- **Frontend:** React, React Router.
- **Entorno de desarrollo:** Vite.
- **Context API:** Para manejar el estado global de favoritos.
- **Estilizado:** CSS.
- **API:** [PokéAPI](https://pokeapi.co/).

---

## Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Dasomacha/ProyectoFinal_Frontend3.git
2. **Instalar dependencias:**
 Asegúrate de tener Node.js instalado, y luego ejecuta:
    ```bash
    npm install
3. **Ejecutar el proyecto:**
    ```bash
    npm run dev
## Test
El proyecto incluye pruebas unitarias y funcionales con Vitest y React Testing Library.

## Pruebas Implementadas
1. Renderización de componentes: Verifica que los componentes principales se rendericen correctamente.
2. Interacción con formularios: Asegura que los campos sean editables y el botón de envío funcione.
