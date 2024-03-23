import {encryptToCipher} from "./encryptToCipher";
import {decryptToPlainText} from "./decryptToPlainText";

function toInteger(a: number, precision: number) {
  return Number.parseInt((a * precision).toString(), 10);
}

export async function encryptLocationA(lat: number, lon: number, precision: number) {
  const latt = toInteger(lat, precision);
  const lonn = toInteger(lon, precision);
  
  const rawLocation = Int32Array.from([latt, 0, -latt, -lonn]);
  return await encryptToCipher(rawLocation);
}

export async function encryptLocationB(lat: number, lon: number, precision: number) {
  const latt = toInteger(lat, precision);
  const lonn = toInteger(lon, precision);
  
  const rawLocation = Int32Array.from([0, latt, latt, lonn]);
  return await encryptToCipher(rawLocation);
}

export async function decryptDistance(cipher: string) {
  const iarr = await decryptToPlainText(cipher);
  const [lat1, lat2, dLat, dLon] = iarr;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
  const R = 6371; // Radius of the Earth in km
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
}