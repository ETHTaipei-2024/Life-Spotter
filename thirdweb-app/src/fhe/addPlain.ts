import SEAL from 'node-seal';

import {encParams} from './fhe_constants';

export async function addPlain(cipher_str: string, i32arr: Int32Array) {
  const seal = await SEAL();

  // parameters
  const schemeType = seal.SchemeType.bfv;
  const securityLevel = seal.SecurityLevel.tc128;

  const encParms = seal.EncryptionParameters(schemeType);
  encParms.load(encParams);

  // load context
  const context = seal.Context(
    encParms,
    true,
    securityLevel,
  );

  // instance
  const batchEncoder = seal.BatchEncoder(context);
  const evaluator = seal.Evaluator(context);

  // variables
  const plainA = seal.PlainText();
  const cipherA = seal.CipherText();
  cipherA.load(context, cipher_str);
  batchEncoder.encode(i32arr, plainA);

  // operation
  evaluator.addPlain(cipherA, plainA, cipherA);

  return cipherA.save();
}
