import { Module } from '@nestjs/common';
import { ItemsModule } from './items/items.module';
import { SignupModule } from './signup/signup.module';

@Module({
  imports: [ItemsModule, SignupModule],
})
export class RoutesModule {}
