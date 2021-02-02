const crypto = require('crypto')

class Verifier {
  constructor (key) {
    this.publicKey = crypto.createPublicKey({
      key,
      format: 'pem',
      type: 'spki'
    })
  }

  verify (signedJson, signature) {
    return crypto.verify(
      'rsa-sha1',
      Buffer.from(signedJson),
      {
        key: this.publicKey,
        padding: crypto.constants.RSA_PKCS1_PSS_PADDING
      },
      Buffer.from(signature, 'base64')
    )
  }
}

module.exports = Verifier
