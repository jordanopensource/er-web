import http from 'http'

export default function (context) {
  if (process.server) {
    context.res.setHeader('Onion-Location', process.env.ONION_ADDRESS)
  }
}
