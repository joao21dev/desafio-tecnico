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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const store_entity_1 = require("./store.entity");
let StoresService = class StoresService {
    constructor(storesRepository) {
        this.storesRepository = storesRepository;
    }
    getAllStores() {
        return this.storesRepository.find();
    }
    async getStoreById(id) {
        const store = await this.storesRepository.findOne(id);
        if (store) {
            return store;
        }
        throw new common_1.HttpException('Loja não encontrada', common_1.HttpStatus.NOT_FOUND);
    }
    async createStore(store) {
        const newStore = await this.storesRepository.create(store);
        await this.storesRepository.save(newStore);
        return newStore;
    }
    async updateStore(id, store) {
        await this.storesRepository.update(id, store);
        const updateStore = await this.storesRepository.findOne(id);
        if (updateStore) {
            return updateStore;
        }
        throw new common_1.HttpException('Loja não encontrada', common_1.HttpStatus.NOT_FOUND);
    }
    async deleteStore(id) {
        const deleteResponse = await this.storesRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Loja não encontrada', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
StoresService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(store_entity_1.Store)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StoresService);
exports.default = StoresService;
//# sourceMappingURL=stores.service.js.map