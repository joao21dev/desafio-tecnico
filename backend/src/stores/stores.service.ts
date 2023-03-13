import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStoreDto } from './dto/createStore.dto';
import { UpdateStoreDto } from './dto/updateStore.dto';
import { Store } from './store.entity';

@Injectable()
export default class StoresService {
  constructor(
    @InjectRepository(Store)
    private storesRepository: Repository<Store>,
  ) {}

  getAllStores() {
    return this.storesRepository.find();
  }

  async getStoreById(id: number) {
    const store = await this.storesRepository.findOne(id);
    if (store) {
      return store;
    }
    throw new HttpException('Loja não encontrada', HttpStatus.NOT_FOUND);
  }

  async createStore(store: CreateStoreDto) {
    const newStore = await this.storesRepository.create(store);
    await this.storesRepository.save(newStore);
    return newStore;
  }

  async updateStore(id: number, store: UpdateStoreDto) {
    await this.storesRepository.update(id, store);
    const updateStore = await this.storesRepository.findOne(id);
    if (updateStore) {
      return updateStore;
    }
    throw new HttpException('Loja não encontrada', HttpStatus.NOT_FOUND);
  }

  async deleteStore(id: number) {
    const deleteResponse = await this.storesRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Loja não encontrada', HttpStatus.NOT_FOUND);
    }
  }
}
