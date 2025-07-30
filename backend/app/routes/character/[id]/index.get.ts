import type { Character } from "~/types/rama/interfaces";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    const ramaCharacter = await $rama<Character>(`/character/${id}`);

    return {
        id: ramaCharacter.id,
        name: ramaCharacter.name,
        image: ramaCharacter.image,
    };
});
