/**
 * returns hardcoded web socket urls
 * (you could also move to env vars or infer from appname)
 */
module.exports = function getWS() {
  let env = process.env.NODE_ENV
  let testing = 'ws://localhost:3333'
  let staging = 'wss://api-staging.wonglok.com/'
  let production = 'wss://api.wonglok.com/'
  if (env === 'testing')
    return testing
  if (env === 'staging')
    return staging
  if (env === 'production')
    return production
  return testing
}
