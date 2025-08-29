import { ValueObject } from "../../foundation/value-object";

import { z } from "zod";

export class UUIDv7 extends ValueObject<string> {
    public validate(value: unknown): value is string {
        return z.uuidv7().safeParse(value).success;
    }
}
