import { ValueObject } from "../../foundation/value-object";

import { z } from "zod";

/**
 * UUID версии 7.
 */
export class UUIDv7 extends ValueObject<string> {
    public validate(value: string) {
        return z.uuidv7().safeParse(value).success;
    }
}
