const users = async (req, res) => {

    res.status(200).json({
        "message": `hello ${req.params.username}`
    })

}

module.exports = users;