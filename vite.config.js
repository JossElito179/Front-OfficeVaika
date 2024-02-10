import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import vue from '@vitejs/plugin-vue';
// import postcss from 'vite-plugin-postcss';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  // vue(),
  // postcss()
]
})
