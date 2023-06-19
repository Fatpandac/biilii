import { defineConfig, presetAttributify, presetIcons, presetUno, transformerVariantGroup } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
    }),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
