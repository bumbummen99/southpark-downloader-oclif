import 'reflect-metadata'
import { Container } from 'inversify'
import Database from '../south-park/database'
import { types } from './types'

const container = new Container()

container.bind<Database>(types.Database).to(Database).inSingletonScope()

export default container
