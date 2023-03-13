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
const jwt_authentication_guard_1 = require("../authentication/jwt-authentication.guard");
const createStore_dto_1 = require("./dto/createStore.dto");
const updateStore_dto_1 = require("./dto/updateStore.dto");
const stores_service_1 = require("./stores.service");
let StoresController = class StoresController {
    constructor(storesService) {
        this.storesService = storesService;
    }
    getAllStores() {
        return this.storesService.getAllStores();
    }
    getStoreById(id) {
        return this.storesService.getStoreById(Number(id));
    }
    async createStore(store) {
        return this.storesService.createStore(store);
    }
    async updateStore(id, store) {
        return this.storesService.updateStore(Number(id), store);
    }
    async deleteStore(id) {
        return this.storesService.deleteStore(Number(id));
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "getAllStores", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoresController.prototype, "getStoreById", null);
__decorate([
    common_1.Post(),
    common_1.UseGuards(jwt_authentication_guard_1.default),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createStore_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "createStore", null);
__decorate([
    common_1.Patch(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateStore_dto_1.UpdateStoreDto]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "updateStore", null);
__decorate([
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoresController.prototype, "deleteStore", null);
StoresController = __decorate([
    common_1.Controller('stores'),
    __metadata("design:paramtypes", [stores_service_1.default])
], StoresController);
exports.default = StoresController;
//# sourceMappingURL=stores.controller.js.map