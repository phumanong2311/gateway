import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { WarehouseControllerModule } from 'src/warehouse/controller/warehouse-controller.module';

@Module({
  imports: [
    WarehouseControllerModule,
    RouterModule.register([
      // {
      //   path: '/product',
      //   module: ProductControllerModule,
      // },
      {
        path: '/warehouse',
        module: WarehouseControllerModule,
      },
    ]),
  ],
})
export class PublicRouter {}
