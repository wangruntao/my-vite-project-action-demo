// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// 如果你的仓库名是 my-vite-project-action-demo
export default defineConfig({
  base: '/my-vite-project-action-demo/',  // 确保以斜杠开头和结尾
  plugins: [react()],
});
