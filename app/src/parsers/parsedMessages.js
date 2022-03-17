const parsedMessages = ({response: { data: {errors} }}) => ({
    validations: errors.map(({message, field}) => <p key={field || message}>{message}</p>)
})

export default parsedMessages
