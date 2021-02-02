import * as crypto from 'crypto'

export default class Verifier {
  constructor (key: string)
  publicKey: crypto.KeyObject
  verify (signedJson: string, signature: string): boolean
}
