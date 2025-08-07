# 🌤️ Clima App

Aplicación web construida con **React**, **Redux Toolkit**, **Axios** y **TailwindCSS** que permite consultar el clima actual y extendido de cualquier ciudad del mundo en tiempo real. El usuario también puede guardar ubicaciones favoritas para un acceso rápido.

![Captura de pantalla](./public/captura.png)

---

## 🧩 Descripción del Proyecto

**Clima App** es una SPA (Single Page Application) que permite a los usuarios:
- Buscar el clima por ciudad.
- Ver datos detallados como temperatura, humedad, viento y sensación térmica.
- Guardar ciudades favoritas.
- Navegar de forma fluida entre distintas vistas sin recargar la página.
- Consultar datos reales consumidos desde la API pública de [OpenWeatherMap](https://openweathermap.org/).

Este proyecto está optimizado para producción, testado con Jest y desplegado en GitHub Pages.

---

## 🚀 Tecnologías Utilizadas

| Herramienta         | Uso principal                          |
|---------------------|----------------------------------------|
| React               | Librería base para construcción de UI  |
| Redux Toolkit       | Manejo del estado global               |
| Axios               | Solicitudes HTTP a la API              |
| TailwindCSS         | Estilos CSS utility-first              |
| Vite                | Empaquetador y entorno de desarrollo   |
| React Router DOM    | Navegación SPA                         |
| Jest + Testing Library | Pruebas unitarias de componentes  |
| GitHub Pages        | Hospedaje de la aplicación              |

---

## ⚙️ Instrucciones de Instalación y Uso

### 1. Clonar el repositorio

```bash
git clone https://github.com/Erit12/clima-app.git
cd clima-app
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

La app estará disponible en `http://localhost:5173`.

### 4. Ejecutar pruebas

```bash
npm run test
```

### 5. Generar build de producción

```bash
npm run build
```

### 6. Desplegar en GitHub Pages

```bash
npm run deploy
```

---

## 🧪 Ejemplos de uso

- Buscar: "Londres"
- Resultado: 15°C, Nublado, viento 12 km/h
- Agregar a favoritos
- Ver desde barra de navegación las ciudades favoritas

---
## 🤝 Contribuciones

Este es un proyecto personal en desarrollo. Las contribuciones son bienvenidas.

### ¿Cómo contribuir?

1. Haz un fork del repositorio
2. Crea una rama con tu funcionalidad: `git checkout -b mejora-clima`
3. Haz commit de tus cambios: `git commit -m 'Agrega X mejora'`
4. Sube tus cambios: `git push origin mejora-clima`
5. Abre un Pull Request

---

## 🧑 Autor

Desarrollado por **Eric Humberto Morales Labastida**  
GitHub: [@Erit12](https://github.com/Erit12)

---

## 📄 Licencia

Este proyecto se encuentra bajo licencia [MIT](LICENSE).
