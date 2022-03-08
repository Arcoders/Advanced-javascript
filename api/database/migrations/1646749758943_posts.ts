import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Posts extends BaseSchema {
  protected tableName = 'posts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('title', 100).notNullable()
      table.string('description', 255).nullable()
      table.text('body').nullable()
      table.string('video_url', 255).nullable()
      table.boolean('is_featured').nullable().defaultTo(false);
      table.boolean('is_personal').nullable().defaultTo(false);
      table.integer('view_count').nullable().defaultTo(0)
      table.integer('view_count_unique').nullable().defaultTo(0)
      table.integer('state_id').unsigned().notNullable()
      table.string('timezone', 50).nullable()
      table.string('publish_at_user').nullable()
      table.timestamp('publish_at').nullable()

      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
