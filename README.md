<h1 align="center">
  SoftStack Factory
</h1>

### Overview

SoftStack Factory's website showcases our history as a coding school, featuring the classes we offered, and highlights the organizations we've supported in our community initiatives. This site is built with [React](https://reactjs.org/), [Gatsby](https://www.gatsbyjs.com/), and [Material-UI](https://mui.com/), and is hosted on GitHub Pages.

## 🛠 Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or later recommended)
- **npm** (comes with Node.js) or **yarn**
- **Gatsby CLI** (optional, for additional commands)

## 🚧 Setting Up the Project

1. **Clone the Repository:**

   ```shell
   git clone https://github.com/digital-underground/ssf.git
   cd ssf
   ```

2. **Install Dependencies:**

   Use npm or yarn to install the required dependencies:

   ```shell
   npm install
   ```

3. **Material-UI Setup:**

   This project utilizes Material-UI for consistent design components. If you need to install it again or add new Material-UI libraries, use:

   ```shell
   npm install @mui/material @emotion/react @emotion/styled
   ```

## 💻 Developing Locally

To run the site locally with hot-reloading enabled:

```shell
npm run develop
```

This command will start a local development server at `http://localhost:8000`.

## 🧩 Using Material-UI

Material-UI provides pre-designed components and themes. Here’s a quick guide on using Material-UI components:

- **Import Components**: Import Material-UI components as needed in your pages or components:

   ```javascript
   import Button from '@mui/material/Button';
   ```

- **Custom Themes**: You can customize the default Material-UI theme by wrapping your application in a theme provider. Add your theme in `gatsby-browser.js` or `gatsby-ssr.js` for server-side rendering support:

   ```javascript
   import { ThemeProvider, createTheme } from '@mui/material/styles';

   const theme = createTheme({
     palette: {
       primary: { main: '#1976d2' },
       secondary: { main: '#dc004e' },
     },
   });

   // Wrap your app with the ThemeProvider
   ```

- **Styling with Material-UI**: You can use the `sx` prop in Material-UI components for styling, or create custom styles with `makeStyles` if you need advanced styling.

## 🌐 Deploying Your Gatsby Website to GitHub Pages

This project is set up for deployment to GitHub Pages. Follow these steps to deploy your changes:

1. **Build and Deploy**:
   To build your site and push it to the `gh-pages` branch, use:

   ```shell
   npm run deploy
   ```

   This command builds your Gatsby site and pushes the static files to the `gh-pages` branch.

2. **Setting GitHub Pages**:
   - Go to your GitHub repository.
   - Under **Settings > Pages**, set the branch to `gh-pages` for deployment.

3. **Check Deployment**:
   Your site should be live at `https://your-username.github.io/ssf`.

## Additional Tips

- **Linting and Formatting**: Consider using ESLint and Prettier for consistent code quality. You can set up custom scripts to lint and format code.
- **Environment Variables**: Gatsby can use `.env` files. If needed, set environment variables in `.env.development` or `.env.production`.

For questions or support, please contact the SoftStack Factory team.


