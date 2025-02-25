import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { WarehouseController } from '../controller/warehouse.controller';
import { WarehouseService } from '../service/warehouse.service';

@Module({
  imports: [HttpModule],
  controllers: [WarehouseController],
  providers: [WarehouseService],
  exports: [WarehouseService],
})
export class WarehouseModule {}
