import { Module } from '@nestjs/common';
import { WarehouseService } from '../service/warehouse.service';
import { WarehouseController } from './warehouse.controller';

@Module({
  imports: [],
  controllers: [WarehouseController],
  providers: [WarehouseService],
})
export class WarehouseControllerModule {}
