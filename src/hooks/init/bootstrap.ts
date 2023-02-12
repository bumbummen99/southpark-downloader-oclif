import { Hook } from '@oclif/core'

const hook: Hook<'init'> = async function () {
  /* Boot the IoC container */
  process.stdout.write('Initializing IoC...\n')
  await import('../../ioc/container')
}

export default hook
