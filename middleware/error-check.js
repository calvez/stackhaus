//  NOTE: This is a middleware example
export default function(context) {
    if (context.app.nuxt.err) {
        context.error({
            statusCode: 500,
            message: 'An error has occured'
            // customProp: 'this is a custom prop' // Add custom properties here
        })
    }
}
