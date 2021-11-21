import { Database } from '@vuex-orm/core'
import Item from '../classes/item'
import Profile from '../classes/Profile'
import User from '../classes/User'


const database = new Database()

database.register(Item)
database.register(User)
database.register(Profile)

export default database