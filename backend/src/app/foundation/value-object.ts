export abstract class ValueObject <T> {
    private $value: T;

    constructor(value: T) {
        const valid = this.validate(value);

        if (!valid) {
            throw new ValueObjectError(`You are trying to create ${this.constructor.name} instance with invalid value.`);
        }

        this.$value = value;
    }



    public get value(): T {
        return this.$value;
    }

    public set value(value: T) {
        const valid = this.validate(value);

        if (!valid) {
            throw new ValueObjectError(`You are trying to update ${this.constructor.name} instance with invalid value.`);
        }

        this.$value = value;
    }



    /**
     * Validate value.
     */
    public abstract validate(value: T): boolean;



    /**
     * Checks whether the current value equals to provided value.
     */
    public equals(x: this): boolean {
        return this.value === x.value;
    }
}



export class ValueObjectError extends TypeError {
    override name: string = this.constructor.name;
}



export type Value <T> = T extends ValueObject<infer V> ? V : T;
