import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Category from 'App/Models/Category';
import Like from 'App/Models/Like'

export default class Lesson extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public body: string

  @column()
  public video_url: string

  @column()
  public category_id: number

  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime
  
  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Category, {
    foreignKey: 'id'
  })
  public category: BelongsTo<typeof Category>

  @hasMany(() => Like, {
    foreignKey: 'id',
  })
  public likes: HasMany<typeof Like>
}
