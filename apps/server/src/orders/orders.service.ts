import { Injectable, BadRequestException } from '@nestjs/common';
import { PromptParserService } from './services/prompt-parser.service';
import { Order, OrderRequest, OrderResponse } from './types';
import { v4 as uuidv4 } from 'uuid';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, orders } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private readonly promptParserService: PromptParserService, private readonly prisma: PrismaService) {}

  async findAll(): Promise<orders[]> {
    return this.prisma.orders.findMany();
  }

  async createOrder(orderRequest: OrderRequest): Promise<OrderResponse> {
    try {
      const parsedOrder = this.promptParserService.parsePrompt(orderRequest.prompt);
      
      if (!parsedOrder.quantity || !parsedOrder.product) {
        return {
          success: false,
          message: 'Invalid order details',
          error: 'Could not parse quantity or product from prompt'
        };
      }

      const order: Order = {
        id: uuidv4(),
        quantity: parsedOrder.quantity,
        unit: parsedOrder.unit as string,
        product: parsedOrder.product,
        frequency: parsedOrder.frequency,
        nextDeliveryDate: parsedOrder.nextDeliveryDate as Date,
        isRecurring: parsedOrder.isRecurring ?? false
      };

      return {
        success: true,
        message: 'Order created successfully',
        data: order
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create order',
        error: error.message
      };
    }
  }
}