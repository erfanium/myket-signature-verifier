# myket-signature-verifier

verifier for Myket signatures and signed data

```ts
import Verifier from 'myket-signature-verifier'

const verifier = new Verifier('key')
verifier.verify('data', 'signature')
```