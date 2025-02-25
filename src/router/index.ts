import { DynamicModule, Module } from '@nestjs/common';
import { PublicRouter } from './public-router';

@Module({})
export class CustomRouterModule {
  static forRoot(): DynamicModule {
    return {
      module: CustomRouterModule,
      imports: [PublicRouter],
    };
  }
}
