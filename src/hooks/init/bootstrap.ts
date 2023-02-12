import { Hook } from '@oclif/core'
import { TDatabaseSymbol } from '../../ioc/types'
import Database from '../../south-park/database'

const hook: Hook<'init'> = async function () {
  /* Create new InversifyJS IoC container */
  this.log('Booting IoC container...')
  const { default: container } = await import('../../ioc/container')

  /* Bind and load the episode database */
  container.bind<string>('test').toConstantValue('Hello, world!')
  this.log(`IoC test value is: ${await container.get<string>('test')}`)

  this.log('Binding Database instance')
  container.bind<Database>(TDatabaseSymbol).to(Database).inSingletonScope()
  this.log('Bound Database to container!')

  this.log('Loading database.json...')
  //await container.get<Database>(types.Database).load()

  this.log('Application booted!')
}

export default hook
