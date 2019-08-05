require('dotenv').config()

console.log('~~~ env file ~~~')
console.log('========================')
console.log('ANALYTICS_SERVICE_ACCOUNT', process.env.ANALYTICS_SERVICE_ACCOUNT)
console.log('ANALYTICS_SERVICE_ACCOUNT_KEY', process.env.ANALYTICS_SERVICE_ACCOUNT_KEY)

console.log('~~~ CIRCLE CI ~~~')
console.log('========================')
console.log('ANALYTICS_SERVICE_ACCOUNT', process.env.CI_ANALYTICS_SERVICE_ACCOUNT)
console.log('ANALYTICS_SERVICE_ACCOUNT_KEY', process.env.CI_ANALYTICS_SERVICE_ACCOUNT_KEY)