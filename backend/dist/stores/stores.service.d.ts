import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/createStore.dto';
import { UpdateStoreDto } from './dto/updateStore.dto';
import { Store } from './store.entity';
export default class StoresService {
    private storesRepository;
    constructor(storesRepository: Repository<Store>);
    getAllStores(): Promise<Store[]>;
    getStoreById(id: number): Promise<Store>;
    createStore(store: CreateStoreDto): Promise<Store>;
    updateStore(id: number, store: UpdateStoreDto): Promise<Store>;
    deleteStore(id: number): Promise<void>;
}
