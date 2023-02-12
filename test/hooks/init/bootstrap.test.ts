import {expect, test} from '@oclif/test'

describe('hooks', () => {
  test
  .stdout()
  .hook('init', {id: 'hello world'})
  .do(output => expect(output.stdout).to.contain('Application booted!'))
  .it('does boot successfully')
})
