# Srigakolapu Chaitanya — Portfolio

A React and Vite portfolio for Srigakolapu Chaitanya, Data Science and AI/ML graduate.

## Local development

Install dependencies and start the development server:

```sh
npm install
npm run dev
```

Create a production build and preview it locally:

```sh
npm run build
npm run preview
```

## Deployment to Vercel

1. Connect the GitHub repository to Vercel.
2. Select **Vite** as the framework preset.
3. Set the build command to `npm run build`.
4. Set the output directory to `dist`.

The portfolio uses local project assets for the profile image, resume, favicon, and other public files. No hosted project-specific asset service is required.

## Contact form configuration

The contact form uses EmailJS in the browser. To preserve contact-form functionality in another deployment, configure the same EmailJS public key, service, and template values currently used by `src/pages/Index.tsx`, or replace that integration with your own email provider. No private server secrets are stored in this project.

## Project stack

- React
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui