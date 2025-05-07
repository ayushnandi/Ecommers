import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),
  ],
  theam:{
    extends:{
      colors:{
        priamry: '#ff5252'
      },
      backgroundColor:{
        priamry : '#ff5252'
      }
    }
  }
})
