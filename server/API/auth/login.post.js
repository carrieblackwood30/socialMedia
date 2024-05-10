import { getUserByUsername } from "~/server/db/users.js"
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt"
import { userTransformer } from "~/server/transformers/user"
import { createRefreshToken } from "~/server/db/refreshTokens"
import { sendError } from "h3"

export default defineCachedEventHandler(async(e) =>{
    const body = await useBody(e)

    const { userName, password } = body

    if(!userName || !password){
        return sendError(e, createError({
            statusCode:400,
            statusMessage: 'invalid params'
        }))
    }

    const user = await getUserByUsername(userName)

    if(!user){
        return sendError(e, createError({
            statusCode:400,
            statusMessage: 'User password is Invalid'
        }))
    }

    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesThePasswordMatch){
        return sendError(e, createError({
            statusCode:400,
            statusMessage: 'UserName or password is Invalid'
        }))
    }

    const { accessToken, refreshToken } = generateTokens(user)

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    sendRefreshToken(e, refreshToken)

    return{
        accessToken: accessToken, user: userTransformer(user)
    }

})