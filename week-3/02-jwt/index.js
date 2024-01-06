const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const z = require('zod');


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */
function signJwt(username, password) {

    const usernameSchema = z.string().email({ message: "Invalid email address" })
    const passwordSchema = z.coerce.string().min(6, { message: "Must be 6 or more characters long" });

    const userStatus = usernameSchema.safeParse(username);
    console.log(userStatus)
    if (!userStatus.success) { return null }

    const passStatus = passwordSchema.safeParse(password);
    console.log(passStatus)
    if (!passStatus.success) { return null }

    // Your code here
    const token = jwt.sign({ username }, jwtPassword, { expiresIn: 60 * 60 })
    console.log(token)
    return token

}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    // Your code here
    try {
        const result = jwt.verify(token, jwtPassword)
        console.log(result)
        return true
    } catch (e) {
        return false
    }
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const result = jwt.decode(token)
    console.log(result)
    if (result) { return true } else { return false }
}

decodeJwt("tokem")

module.exports = {
    signJwt,
    verifyJwt,
    decodeJwt,
    jwtPassword,
};
