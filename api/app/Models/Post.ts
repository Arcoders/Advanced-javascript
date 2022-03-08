import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Topic from 'App/Models/Topic'
import Asset from 'App/Models/Asset'
import PostSnapshot from 'App/Models/PostSnapshot'
import User from 'App/Models/User'


export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string | null

  @column()
  public body: string | null

  @column()
  public videoUrl: string | null

  @column()
  public isFeatured: boolean  | null

  @column()
  public isPersonal: boolean | null

  @column()
  public viewCount: number | null

  @column()
  public viewCountUnique: number | null

  @column()  
  public stateId: number | null

  @column()
  public timezone: string | null

  @column()
  public publishAtUser: string

  @column.dateTime()
  public publishAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(() => Topic, {
    pivotTable: 'post_topics',
    pivotColumns: ['sort_order']
  })
  public topics: ManyToMany<typeof Topic>

  @manyToMany(() => Asset, {
    pivotTable: 'asset_posts',
    pivotColumns: ['sort_order']
  })
  public assets: ManyToMany<typeof Asset>

  @hasMany(() => PostSnapshot)
  public snapshots: HasMany<typeof PostSnapshot>

  @manyToMany(() => User)
  public authors: ManyToMany<typeof User>
}
