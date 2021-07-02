const multer = require('multer')

const check = fields => (req, file, next) => {
    for(field of fields) {
        if(!req.body[field]) {
            return next({ info: new Error('MAAAL') })
        }
    }
    
    next(null, true)
}


const upload = multer({
    dest: "uploads",
    fileFilter: check(['username', 'name', 'email', 'birthdate']),
    
})

module.exports = {
    single: upload.single('profile_pic')
}