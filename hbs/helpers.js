const hbs = require('hbs');

hbs.registerHelper('getanio', () => {
    return new Date().getFullYear();
})