# FHE utils

## input

should be `Int32Array` with four element

```js
// for A
const [lat1, 0, -lat1, -lon1] = A;
// for B
const [0, lat2, lat2, lon2] = B;
// addPlain(A, B)
const [lat1, lat2, lat2 - lat1, lon2 - lon1] = Int32Array;
```

## distance

```js
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance;
}
```
