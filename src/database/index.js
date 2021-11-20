import { Database } from '@vuex-orm/core'
import Item from '../classes/item'


const database = new Database()

database.register(Item)

export default database