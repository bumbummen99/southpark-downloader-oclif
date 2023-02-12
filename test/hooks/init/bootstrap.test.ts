import {expect, test} from '@oclif/test'

describe('hooks', () => {
  test
  .stdout()
  .hook('init', {id: 'hello world'})
  .do(output => expect(output.stdout).to.contain.all.members(['Initializing IoC...', 'Loading database.json...']))
  .it('does boot successfully')
})
