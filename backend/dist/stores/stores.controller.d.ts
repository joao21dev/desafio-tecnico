import { CreateStoreDto } from './dto/createStore.dto';
import { UpdateStoreDto } from './dto/updateStore.dto';
import StoresService from './stores.service';
export default class StoresController {
    private readonly storesService;
    constructor(storesService: StoresService);
    getAllStores(): Promise<import("./store.entity").Store[]>;
    getStoreById(id: string): Promise<import("./store.entity").Store>;
    createStore(store: CreateStoreDto): Promise<import("./store.entity").Store>;
    updateStore(id: string, store: UpdateStoreDto): Promise<import("./store.entity").Store>;
    deleteStore(id: string): Promise<void>;
}
