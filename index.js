module.exports = err => {
    let message='';
    if(err.name === 'CastError') {
        message =  `Invalid ${err.path}: ${err.value}`;
    }
    if(err.code===11000){
        const value = err.errmsg.match(/(["'])(?:(?=(\\?))\2.)*?\1/)[0];
        message = `Duplicate field value: ${value}. Please use anothe value!`;
    }
    if(err.name==='ValidationError'){
        const errors = Object.values(err.errors).map(el => el.message);
        message = `Invalid input data. ${errors.join('. ')}`;
    }
    return message
}