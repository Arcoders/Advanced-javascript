import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import Category from 'App/Models/Category'

export default class CategoriesController {

    public async get({ response }: HttpContextContract) {
        try {
            const categories = await Category.all()
            return response.created(categories)
          } catch {
            return response.status(400)
        }
    }
    
    public async create({ request, response }: HttpContextContract) {
        const categorySchema = schema.create({
            name: schema.string(
                { trim: true }, 
                [rules.unique({ table: 'categories', column: 'name', caseInsensitive: true })]
            ),
        })

        const data = await request.validate({schema: categorySchema})
        
        try {
            await Category.create(data)
            return response.created()
          } catch {
            return response.status(400)
        }
    }

    public async delete({ request, response }: HttpContextContract) {
        const category_id = request.param('category_id');

        try {
            const category = await Category.findOrFail(category_id)
            await category.delete() 
            return response.status(200)
          } catch {
            return response.status(400)
        }

    }
}
