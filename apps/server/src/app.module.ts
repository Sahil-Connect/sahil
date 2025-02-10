import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersController } from './orders/orders.controller';
import { OrdersService } from './orders/orders.service';
import { PromptParserService } from './orders/services/prompt-parser.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, OrdersController],
  providers: [AppService, OrdersService, PromptParserService],
})
export class AppModule {}
