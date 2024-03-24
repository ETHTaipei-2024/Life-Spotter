import { useEffect, useState } from "react";
import { locationType } from "../App";
import { encryptLocationA } from "../fhe/location";

function useEncryptionLocation(location: locationType | null) {
    const [enc, setEnc] = useState<string | null>(null);
    useEffect(() => {
        // if location is not null, encrypt the location
        if (!location) return;
        (async () => {
            let cipherTarget = await encryptLocationA(
                location.latitude,
                location.longitude,
                location.precision || 1
            );
            setEnc(cipherTarget);
        })();
    }, [location]);

    return enc;
}

export default useEncryptionLocation;
