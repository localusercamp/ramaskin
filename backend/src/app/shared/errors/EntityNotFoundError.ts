export class EntityNotFoundError extends Error {
    override name: string = this.constructor.name;

    constructor(public context: object) {
        super("Entity has not been found.");
    }
}
