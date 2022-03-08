import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Profiles extends BaseSchema {
  protected tableName = 'profiles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('user_id').unsigned().references('id').inTable('users').unique().notNullable()
      table.integer('avatar_asset_id').unsigned().references('id').inTable('assets').nullable()
      table.text('biography').nullable().defaultTo('')
      table.string('linkedin_url', 255).nullable().defaultTo('')
      table.string('github_url', 255).nullable().defaultTo('')

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
