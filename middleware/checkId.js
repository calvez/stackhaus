export default function(context) {
    if (context.params.id) {
        return true
    } else {
        context.error({
            message: 'Incorredct ID'
        })
    }
}
