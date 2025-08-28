import { ValueObject } from "../foundation/value-object";

import { z } from "zod";

class UUIDv7 extends ValueObject<string> {
    public validate(value: string): boolean {
        return z.uuidv7().safeParse(value).success;
    }
}

export {
    UUIDv7,
};

