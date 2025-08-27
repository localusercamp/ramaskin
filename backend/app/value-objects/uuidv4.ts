import { ValueObject } from "../foundation/value-object";

import { z } from "zod";

class UUIDv4 extends ValueObject<string> {
    public validate(value: string): boolean {
        return z.uuidv4().safeParse(value).success;
    }
}

export {
    UUIDv4,
};

