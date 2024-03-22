import { type MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RoutesModule } from './routes/routes.module';
@Module({
  imports: [
    RoutesModule,
    ConfigModule.forRoot({
      // https://docs.nestjs.com/techniques/configuration#custom-configuration-files
      isGlobal: true,
      cache: true,
    }),
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {}
}
