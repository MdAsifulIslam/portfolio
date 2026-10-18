## Contact form setup

The contact form sends messages through EmailJS to the fixed recipient configured in src/App.jsx. The EmailJS service ID, template ID, and public key are set there as browser-visible defaults; Vite environment variables can optionally override them locally or in Netlify:

- VITE_EMAILJS_SERVICE_ID
- VITE_EMAILJS_TEMPLATE_ID
- VITE_EMAILJS_PUBLIC_KEY

In the EmailJS template, set the recipient (To Email) to {{to_email}} and the reply-to address to {{reply_to}}. The template receives {{from_name}}, {{from_email}}, {{message}}, {{to_email}}, and {{reply_to}}. After changing Netlify variables, trigger a new deploy because Vite embeds VITE_* values at build time.

Do not commit .env or put an EmailJS private key in a VITE_* variable. The EmailJS public key is exposed in the browser by design.
