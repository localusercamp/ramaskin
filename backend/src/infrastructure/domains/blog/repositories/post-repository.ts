import { PostRepositoryContract } from "../../../../app/domains/blog/repositories/post-repository";
import { posts } from "../../../database/schema/post";
import { db } from "../../../database";
import { eq } from "drizzle-orm";
import {
    PostId,
    PostTitle,
    PostContent,
    PostCreatedBy,
    type Post,
    type PostIdValue,
} from "../../../../app/domains/blog/models/post";
import { EntityNotFoundError } from "../../../../app/shared/errors/EntityNotFoundError";

export class PostRepository extends PostRepositoryContract
{
    public async find(id: PostIdValue): Promise<Post | null> {
        try {
            return await this.findOrFail(id);
        }
        catch (e: unknown) {
            if (e instanceof EntityNotFoundError) {
                return null;
            }
            else {
                throw e;
            }
        }
    }

    public async findOrFail(id: PostIdValue): Promise<Post> {
        const rows = await db.select().from(posts).where(eq(posts.id, id));

        const row = rows[0];

        if (row === undefined) {
            throw new EntityNotFoundError({ id });
        }

        return {
            id: new PostId(row.id),
            title: new PostTitle(row.title),
            content: new PostContent(row.content),
            createdBy: new PostCreatedBy(row.createdBy),
        };
    }
}
