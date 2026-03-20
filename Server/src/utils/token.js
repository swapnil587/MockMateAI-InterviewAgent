import jwt from "jsonwebtoken";

const genToken = async (userId) => {
    try {
        const token = jwt.sign(
            { userId },
            process.env.JWTSECRETE,
            { expiresIn: "7d" }
        );
        return token;
    } catch (error) {
        console.log(`error while generating Token ${error}`);
    }
};

export default genToken;