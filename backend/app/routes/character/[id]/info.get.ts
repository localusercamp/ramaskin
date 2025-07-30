import type { Character, Episode } from "~/types/rama/interfaces";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, "id");

    const { episode } = await $rama<Character>(`/character/${id}`);

    const episodeUrlStart = "https://rickandmortyapi.com/api/episode/";

    const episodesIdsString = episode.map(x => x.replace(episodeUrlStart, "")).join(",");

    const episodes = await $rama<Episode[]>(`/episode/${episodesIdsString}`);

    return episodes.map(x => ({
        id: x.id,
        name: x.name,
    }));
});
