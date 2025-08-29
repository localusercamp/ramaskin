import {
    UUIDv7 as PostId,
    UUIDv7 as PostCreatedBy,
} from "../../../shared/value-objects/uuidv7";

import {
    ValueObject,
    type Value,
} from "../../../foundation/value-object";

import z from "zod";



/**
 * Наименование поста.
 */
class PostTitle extends ValueObject<string> {
    public validate(value: string) {
        return z.string().min(5).max(255).safeParse(value).success;
    }
}

/**
 * Содержимое поста.
 */
class PostContent extends ValueObject<string> {
    public validate(value: string) {
        return z.string().min(128).max(10_000).safeParse(value).success;
    }
}



type Post = {
    /**
     * Уникальный идентификатор поста
     */
    id: PostId;

    /**
     * Наименование поста.
     */
    title: PostTitle;

    /**
     * Содержимое поста.
     */
    content: PostContent;

    /**
     * Уникальный идентификатор пользователя, который создал пост.
     */
    createdBy: PostCreatedBy;
};

type PostIdValue = Value<PostId>;



export {
    PostId,
    PostTitle,
    PostContent,
    PostCreatedBy,

    type Post,
    type PostIdValue,
};
