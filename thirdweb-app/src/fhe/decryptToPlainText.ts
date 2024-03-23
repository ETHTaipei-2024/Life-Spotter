import SEAL from 'node-seal';

import {encParams, privateKey} from './fhe_constants';

export async function decryptToPlainText(cipher_str: string) {
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

  // load public key and secret key
  const keyGen = seal.KeyGenerator(context);
  const secKey = keyGen.secretKey();
  secKey.load(context, privateKey);

  // cipher text
  const plainA = seal.PlainText();
  const cipherA = seal.CipherText();

  // instance
  const batchEncoder = seal.BatchEncoder(context);
  const decryptor = seal.Decryptor(context, secKey);

  // decryption
  cipherA.load(context, cipher_str);
  decryptor.decrypt(cipherA, plainA);

  return batchEncoder.decode(plainA, false);
}
