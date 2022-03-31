import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
//   server: {
//     port: 8989,
//     open: true,
//     proxy: {
//       '/api': {
//         target: 'http://localhost:7777/',
//         changeOrigin: true,
//         rewrite: path => path.replace(/^\/api/, '/api'),
//       },
//     },
//   },
// });

export default defineConfig(({ command, mode }) => {
  if (command === 'serve') {
    return {
      // dev 独有配置
      plugins: [vue()],
      server: {
        open: true,
        cors: true,
        proxy: {
          '/api': {
            target: 'http://localhost:7777/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '/api'),
          },
        },
      },
    };
  } else {
    // command === 'build'
    return {
      plugins: [vue()],
      // build 独有配置
    };
  }
});
