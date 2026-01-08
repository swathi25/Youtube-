import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// REMOVE: import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react()], // Back to your original
});
