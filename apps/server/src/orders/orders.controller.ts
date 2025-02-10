import { Controller, Post, Body, HttpStatus, HttpException, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrderRequest, OrderResponse } from './types';
import { orders } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async getOrders(): Promise<orders[]> {
    return this.ordersService.findAll();
  }

  @Post()
  async createOrder(@Body() orderRequest: OrderRequest): Promise<OrderResponse> {
    try {
      if (!orderRequest.prompt) {
        throw new HttpException('Prompt is required', HttpStatus.BAD_REQUEST);
      }

      const response = await this.ordersService.createOrder(orderRequest);
      
      if (!response.success) {
        throw new HttpException(
          response.error || 'Failed to process order',
          HttpStatus.BAD_REQUEST
        );
      }

      return response;
    } catch (error) {
      if (error instanceof HttpException) {
        throw error;
      }
      
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}