import { Hook } from '@oclif/core'
import { Container } from 'inversify'
import { types } from '../../ioc/types'
import Database from '../../south-park/database'

const hook: Hook<'init'> = async function () {
  /* Boot the IoC container */
  const { default: container }: { default: Container } = await import('../../ioc/container')

  /* Load the database */
  await container.get<Database>(types.Database).load()

  process.stdout.write('Application booted!\n')
}

export default hook
