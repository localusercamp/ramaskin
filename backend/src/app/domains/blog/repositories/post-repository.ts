import type { Post, PostIdValue } from "../models/post";

export abstract class PostRepositoryContract
{
    public abstract findOrFail(id: PostIdValue): Promise<Post>;
    public abstract find(id: PostIdValue): Promise<Post | null>;
}
