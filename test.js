'use strict'

const tap = require('tap')
const Verifier = require('./index')

const test = tap.test

const publicKey = `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCBzmn2wz/71u4bdCGYWolzoo9O
4Yn6n75phJg1sK3oHhicKEM2ujkPUFaWYOIWfHS+bJ2wbF7OVZ/PFa6zIeGvx0uv
uE3+mGZjH86EDPpB7J93lXaPQvKGS8PoFQELbCappVl5k7CBuqbWsxakKaQoA4v2
ttvEOLGk55iUaQo82QIDAQAB
-----END PUBLIC KEY-----`

test('verify', (t) => {
  t.plan(2)

  const data = '{"orderId":"02965157","packageName":"net.ragham.booking","productId":"test","purchaseTime":1612198113000,"developerPayload":"60172afa4282b2144b19aa3d1612198098671","purchaseToken":"02965157","purchaseState":0,"autoRenew":false}'
  const signature = 'Xe7aSFqJVA9TkdtGbGcD783cH7IS7iYxza2NsvFgtbipcY68fSVnH0taZAYqs1zxJBZW6bMbDHMMHBAe4qOf9eCVlIyBaZu23q9vipNiS2qlMUsEJMzylDliCGELkneKzMto4OrJmfWG6JZ4Ryp0QllCjES7OfE64aiROIM+UJs='

  const verifier = new Verifier(publicKey)

  t.is(verifier.verify(data, signature), true)
  t.is(verifier.verify('xyz', signature), false)
})
