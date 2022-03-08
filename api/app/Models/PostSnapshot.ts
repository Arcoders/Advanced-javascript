import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Post from 'App/Models/Post'

export default class PostSnapshot extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public body: string

  @column()
  public videoUrl: string

  @column()
  public isFeatured: boolean 

  @column()
  public isPersonal: boolean

  @column()
  public viewCount: number

  @column()
  public viewCountUnique: number

  @column()  
  public stateId: number

  @column()
  public timezone: string

  @column.dateTime()
  public publishAtUser: DateTime

  @column()
  public publishAt: string

  @column.dateTime()
  public deletedAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Post)
  public post: BelongsTo<typeof Post>
}
