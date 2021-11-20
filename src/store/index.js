import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from '../database/index'

export default createStore({
  plugins: [VuexORM.install(database)]
})