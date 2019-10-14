if(process.env.NODE_ENV === 'production'){
    module.exports = require('./dist/SelectorTab.min.js')
}else{
    module.exports = require('./dist/SelectorTab.js')
}