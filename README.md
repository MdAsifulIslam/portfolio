# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact form setup

The contact form sends messages through EmailJS to the fixed recipient configured in src/App.jsx. The EmailJS service ID, template ID, and public key are set there as browser-visible defaults; Vite environment variables can optionally override them locally or in Netlify:

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

In the EmailJS template, set the recipient (To Email) to {{to_email}} and the reply-to address to {{reply_to}}. The template receives {{from_name}}, {{from_email}}, {{message}}, {{to_email}}, and {{reply_to}}. After changing Netlify variables, trigger a new deploy because Vite embeds VITE_* values at build time.

Do not commit .env or put an EmailJS private key in a VITE_* variable. The EmailJS public key is exposed in the browser by design.
