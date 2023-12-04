import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
    faCircleCheck,
    faPenToSquare, 
    faPlus, 
    faTrashCan, 
} from '@fortawesome/free-solid-svg-icons'


library.add(faPlus, faTrashCan, faPenToSquare, faCircleCheck)



createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
