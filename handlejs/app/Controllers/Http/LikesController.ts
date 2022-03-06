import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Like from 'App/Models/Like'

export default class LikesController {
    

    public async create({ request, response }: HttpContextContract) {
        const likeSchema = schema.create({
            user_id: schema.number([
                rules.exists({ table: 'users', column: 'id' })
              ]),
              lesson_id: schema.number([
                rules.exists({ table: 'lessons', column: 'id' })
              ]),
        })

        const data = await request.validate({schema: likeSchema})

        try {
            await Like.create(data)
            return response.created()
          } catch {
            return response.status(400)
        }
    }

}
