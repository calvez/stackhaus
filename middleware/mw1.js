//  NOTE: This is a middleware example
export default function(context) {
    console.log('this is mw1.js in middleware/') //logs in terminal
    if (context.app.nuxt.err) {
        context.error({
            statusCode: 500,
            message: 'An error has occured',
            customProp: 'this is a custom prop'
        })
    }
}
