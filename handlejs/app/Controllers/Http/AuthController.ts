import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class AuthController {

    public async register({ auth, request, response }: HttpContextContract) {
        const userSchema = schema.create({
            username: schema.string(
              { trim: true },
              [rules.unique({ table: 'users', column: 'username', caseInsensitive: true })]
            ),
            email: schema.string(
              { trim: true }, 
              [rules.email(), rules.unique({ table: 'users', column: 'email', caseInsensitive: true })]
            ),
            password: schema.string(
              {}, 
              [rules.minLength(6)]
            )
        })

        const data = await request.validate({schema: userSchema})
        
        try {
          await User.create(data)
          return response.created()

          } catch {
            return response.badRequest('Invalid credentials')
        }
    }

    public async login({ auth, request, response }: HttpContextContract) {
        const email = request.input('email')
        const password = request.input('password')
        
        try {
            const token = await auth.use('api').attempt(email, password)
            return response.send({ token })
          } catch {
            return response.badRequest('Invalid credentials')
        }
    }

}
