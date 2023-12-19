function validateInput(arr) {
    const zod = require('zod')

    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response)
}




validateInput([1,2])
