import { createC2pa, C2paConfig, C2pa, C2paReadResult } from "c2pa";

import { wasmSrc, workerSrc } from "./constants";
class ImageAuthenticator {
    private c2pa: C2pa | null = null;
    constructor() {
        this.initC2pa();
    }
    async initC2pa(): Promise<void> {
        const config: C2paConfig = {
            wasmSrc,
            workerSrc,
            fetchRemoteManifests: true,
        };
        this.c2pa = await createC2pa(config);
    }

    async readMetadata(image: File): Promise<C2paReadResult | null> {
        if (!this.c2pa) {
            return null;
        }
        return await this.c2pa?.read(image);
    }
}

export default ImageAuthenticator;
