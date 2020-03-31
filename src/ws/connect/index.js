/**
 * notes:
 * - verify event.headers.Origin to enforce same-origin
 * - non 200 response will disconnect the client socket
 */
let arc = require('@architect/functions')

exports.handler = async function ws(event) {
  console.log('ws-connect called with', event)
  return {statusCode: 200}
}
