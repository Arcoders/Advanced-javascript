import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Lesson from 'App/Models/Lesson'

export default class LessonsController {
    public async get({ response }: HttpContextContract) {
        try {
            const lessons = await Lesson.all()
            return response.created(lessons)
          } catch {
            return response.status(400)
        }
    }

    public async create({ request, response }: HttpContextContract) {
        const lessonSchema = schema.create({
            title: schema.string({ trim: true, escape: true }),
            description: schema.string.optional({escape: true}),
            video_url: schema.string.optional({escape: true}),
            category_id: schema.number.optional([
                rules.exists({ table: 'categories', column: 'id' })
              ]),
        })
        try {
            const data = await request.validate({schema: lessonSchema})
            await Lesson.create(data)
            return response.created()
          } catch {
            return response.status(400)
        }
    }

    public async delete({ request, response }: HttpContextContract) {
        const lesson_id = request.param('lesson_id');

        try {
            const lesson = await Lesson.findOrFail(lesson_id)
            await lesson.delete() 
            return response.status(200)
          } catch {
            return response.status(400)
        }
    }
}
