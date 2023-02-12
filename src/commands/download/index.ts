import { Command } from '@oclif/core'

export default class Hello extends Command {
  static description = 'Download the episodes'

  static examples = [
    '$ spdl download ',
  ]

  async run(): Promise<void> {
    this.log('Let\'s download some South Park episodes!')
  }
}
