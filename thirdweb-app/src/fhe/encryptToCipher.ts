import SEAL from 'node-seal';

import {encParams, publicKey} from './fhe_constants';

export async function encryptToCipher(i32arr: Int32Array): Promise<string> {
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
  const pubKey = keyGen.createPublicKey();
  pubKey.load(context, publicKey);

  // cipher text
  const plainA = seal.PlainText();
  const cipherA = seal.CipherText();

  // instance
  const batchEncoder = seal.BatchEncoder(context);
  const encryptor = seal.Encryptor(context, pubKey);

  // encyption
  batchEncoder.encode(i32arr, plainA);
  encryptor.encrypt(plainA, cipherA);

  return cipherA.save();
}
