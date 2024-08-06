import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerCompileClass,
    transformerDirectives,
    transformerVariantGroup,
  } from 'unocss'

  import { presetFluid } from 'unocss-preset-fluid'
  
  export default defineConfig({
    presets: [
      presetAttributify(),
      presetUno(),
      presetIcons({
        customizations: {
          iconCustomizer(collection, icon, props) {
            if (collection === 'mdi' && icon === 'plus') {
              props.width = '1.05em'
              props.height = '1.05em'
            }
          }
        }
      }),
      presetFluid(),
    ],
    transformers: [
      transformerCompileClass(),
      transformerVariantGroup(),
      transformerDirectives(),
    ],
})