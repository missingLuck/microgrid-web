import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import{ constant, times, zipObject } from 'lodash'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

const INDENT = 4
function toSameValueObject<T>(array: string[], value: ArrayLike<T>) {
    return zipObject(array, times(array.length, constant(value)))
}

export default defineConfigWithVueTs(
    {
        name: 'app/files-to-lint',
        files: ['**/*.{ts,mts,tsx,vue}'],
        rules: {
            'vue/multi-word-component-names': 'off',
            ...toSameValueObject(['vue/html-indent', '@/indent'], [2, INDENT]),
            'eqeqeq': [2, 'allow-null'],
            'quotes': [2, 'single', {
                avoidEscape: true,
                allowTemplateLiterals: true
            }],
            'semi': [2, 'never'],
            'no-var': 'error',
            'semi-spacing': [2, {
                before: false,
                after: true
            }],
            ...toSameValueObject(['arrow-spacing', 'vue/arrow-spacing'], [2, {
                before: true,
                after: true
            }]),
            ...toSameValueObject(['@/comma-dangle', 'vue/comma-dangle'], [2, 'never']),
            ...toSameValueObject(['@/comma-spacing', 'vue/comma-spacing'], [2, {
                before: false,
                after: true
            }]),
            ...toSameValueObject(['comma-style', 'vue/comma-style'], [2, 'last']),
            'constructor-super': 2,
            ...toSameValueObject(['key-spacing', 'vue/key-spacing'], [2, {
                beforeColon: false,
                afterColon: true
            }])
        }
    },
    globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),
    pluginVue.configs['flat/essential'],
    vueTsConfigs.recommended
)
