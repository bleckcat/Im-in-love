import { defineConfig } from "@lynx-js/rspeedy"

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin"
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin"
import { pluginSass } from "@rsbuild/plugin-sass"

export default defineConfig({
  output: {
    distPath: {
      root: "./dist",
    },
    minify: true,
  },
  server: {
    port: 3000,
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        return `${url}?fullscreen=true`
      },
    }),
    pluginReactLynx(),
    pluginSass(),
  ],
})
