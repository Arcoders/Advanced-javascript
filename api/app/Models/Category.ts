import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Course from 'App/Models/Course'
import Lesson from 'App/Models/Lesson'

export default class Category extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo(() => Course, {
    foreignKey: 'course_id',
  })
  
  public course: BelongsTo<typeof Course>

  @hasMany(() => Lesson, {
    foreignKey: 'id',
  })
  public lessons: HasMany<typeof Lesson>
}
