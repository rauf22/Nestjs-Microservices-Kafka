"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
let PostsController = (() => {
    let PostsController = class PostsController {
        async onModuleInit() {
            this.client.subscribeToResponseOf('add.new.post');
            this.client.subscribeToResponseOf('get.posts.list');
            await this.client.connect();
        }
        appPost(post) {
            console.log(post);
            return this.client.send('add.new.post', post);
        }
        getList() {
            return this.client.send('get.posts.list', '');
        }
    };
    __decorate([
        microservices_1.Client({
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    clientId: 'posts',
                    brokers: ['localhost:9092'],
                },
                consumer: {
                    groupId: 'posts-consumer'
                }
            }
        }),
        __metadata("design:type", microservices_1.ClientKafka)
    ], PostsController.prototype, "client", void 0);
    __decorate([
        common_1.Post('/'),
        __param(0, common_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "appPost", null);
    __decorate([
        common_1.Get('/'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], PostsController.prototype, "getList", null);
    PostsController = __decorate([
        common_1.Controller('posts')
    ], PostsController);
    return PostsController;
})();
exports.PostsController = PostsController;
//# sourceMappingURL=posts.controller.js.map