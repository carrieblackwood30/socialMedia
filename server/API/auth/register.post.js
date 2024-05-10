import { sendError } from "h3"
import { createUser } from "~/server/db/users"
import { userTransformer } from "~/server/transformers/user"


export default defineEventHandler(async(e) =>{
    const body = useBody(e)

    const{userName, email, password,  repeatPassword, name} = body

    if(!userName || !email || !password || !repeatPassword || !name){
        return sendError(e, createError({statusCode: 400, statusMessage: 'invalid params'}))
    }

    if(password !== repeatPassword){
        return sendError(e, createError({statusCode: 400, statusMessage: 'password do not match'}))
    }

    const userData = {
        userName,
        email,
        password,
        name,
        profileImg: 'http://picsum.photos/200'
    }

    const user = await createUser(userData  )

    return{
        body: userTransformer(user)
    }
})