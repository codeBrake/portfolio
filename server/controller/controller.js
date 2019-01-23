module.exports = {
    addContacts: (req, res) => {
        try{
            const db = req.app.get('db')
            const {name, email, message} = req.body
            console.log(req.body)
            db.create_contact({name, email, message}).then(response => {
                console.log(response)
                res.send(response)
            })

        }catch(error){
            console.log(error)
        }
        
    }
}