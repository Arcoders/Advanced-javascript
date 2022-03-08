import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Post from 'App/Models/Post'

export default class Topic extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: string

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => User)
  public role: BelongsTo<typeof User>

  @manyToMany(() => Post, {
    pivotTable: 'post_topics',
    pivotColumns: ['sort_order']
  })
  public posts: ManyToMany<typeof Post>
}
