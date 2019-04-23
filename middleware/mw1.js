export default function(context) {
    console.log('this is mw1.js in middleware/') //logs in terminal
    console.log('app.data', context.app.data)
    context.error({
        statusCode: 500,
        message: 'An error has occured',
        customProp: 'this is a custom prop'
    })
}
