import { ClientKafka } from "@nestjs/microservices";
import { IPost } from "./interfaces/post.interface";
export declare class PostsController {
    client: ClientKafka;
    onModuleInit(): Promise<void>;
    appPost(post: IPost): import("rxjs").Observable<any>;
    getList(): import("rxjs").Observable<any>;
}
