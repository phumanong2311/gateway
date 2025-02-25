import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { PaginationWarehouseDto } from '../dtos';
import { WarehouseService } from '../service/warehouse.service';

@Controller()
export class WarehouseController {
  constructor(private readonly warehouseService: WarehouseService) {}

  @Get(':id')
  async getWarehouse(@Param('id') id: string) {
    return this.warehouseService.getWarehouseById(id);
  }

  @Get('')
  async getAllWarehouses(@Query() query: PaginationWarehouseDto) {
    return this.warehouseService.findWarehousesWithPagination(query);
  }

  @Post('create')
  async createWarehouse(@Body() data: any) {
    return this.warehouseService.createWarehouse(data);
  }
}
