import { Hook } from '@oclif/core'
import { Container } from 'inversify'
import { types } from '../../ioc/types'
import Database from '../../south-park/database'

const hook: Hook<'init'> = async function () {
  /* Boot the IoC container */
  process.stdout.write('Initializing IoC...\n')
  const { default: container }: { default: Container } = await import('../../ioc/container')

  /* Load the database */
  process.stdout.write('Loading database.json...\n')
  await container.get<Database>(types.Database).load()
}

export default hook
