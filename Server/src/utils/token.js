import jwt from "jsonwebtoken"
const genToken=async (userId)=>{
    try {
        const token=jwt.sign({userId}. process.env.JWTSECRETE, {expireIn:"7d"})
        return token
    } catch (error) {
        console.log(`error in token`)
    }

}
export default genToken