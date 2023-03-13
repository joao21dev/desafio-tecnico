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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Store = class Store {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Store.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ type: 'bigint' }),
    __metadata("design:type", String)
], Store.prototype, "cnpj", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "fantasyName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "socialName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "storeEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "storePhone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "ownerName", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "ownerEmail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "ownerPhone", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Store.prototype, "ownerSecondaryPhone", void 0);
Store = __decorate([
    typeorm_1.Entity()
], Store);
exports.Store = Store;
//# sourceMappingURL=store.entity.js.map