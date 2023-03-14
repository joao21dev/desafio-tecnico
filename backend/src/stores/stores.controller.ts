import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import { CreateStoreDto } from './dto/createStore.dto';
import { UpdateStoreDto } from './dto/updateStore.dto';
import StoresService from './stores.service';

@Controller('stores')
export default class StoresController {
  constructor(private readonly storesService: StoresService) {}

  @Get()
  getAllStores() {
    return this.storesService.getAllStores();
  }

  @Get(':cnpj')
  async getStoreByCNPJ(@Param('cnpj') cnpj: string) {
    return this.storesService.getStoreByCNPJ(cnpj);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createStore(@Body() store: CreateStoreDto) {
    return this.storesService.createStore(store);
  }

  @Patch(':id')
  async updateStore(@Param('id') id: string, @Body() store: UpdateStoreDto) {
    return this.storesService.updateStore(Number(id), store);
  }

  @Delete(':id')
  async deleteStore(@Param('id') id: string) {
    return this.storesService.deleteStore(Number(id));
  }
}
