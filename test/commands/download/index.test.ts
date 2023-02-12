import {expect, test} from '@oclif/test'

describe('download', () => {
  test
  .stdout()
  .command('download')
  .it('runs download cmd', ctx => {
    expect(ctx.stdout).to.contain('Let\'s download some South Park episodes!')
  })
})
