// import "babel-polyfill";

import { binder, fwa } from './libs/binder'
import { constants } from './modules/common'
import { headerMenu } from './modules/header-menu'
import { languagePicker } from './modules/language-picker'
import { wrapTables } from './modules/wrap-tables'

binder({
  bounds: {
    'html': constants,
    '.js-header': headerMenu,
    '.js-header-language': languagePicker,
    '.content table': wrapTables
  },
  runTests: false
})
