import { Injectable } from '@nestjs/common';
import { Order } from '../types';

@Injectable()
export class PromptParserService {
  private readonly quantityPattern = /(\d+)\s*(kg|kgs|kilos)/i;
  private readonly productPattern = /(rice|wheat|sugar|flour)/i;
  private readonly recurringPattern = /every\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i;
  private readonly inXDaysPattern = /in\s+(\d+)\s+days?/i;
  private readonly nextWeekPattern = /next\s+week/i;
  private readonly tomorrowPattern = /tomorrow/i;
  private readonly todayPattern = /today/i;
  private readonly nextDayPattern = /next\s+(monday|tuesday|wednesday|thursday|friday|saturday|sunday)/i;

  parsePrompt(prompt: string): Partial<Order> {
    const order: Partial<Order> = {};
    const today = new Date('2025-01-03T11:28:46+03:00');

    this.parseQuantityAndProduct(prompt, order);
    this.parseDeliveryTime(prompt, order, today);

    return order;
  }

  private parseQuantityAndProduct(prompt: string, order: Partial<Order>) {
    const quantityMatch = prompt.match(this.quantityPattern);
    const productMatch = prompt.match(this.productPattern);

    if (quantityMatch) {
      order.quantity = parseInt(quantityMatch[1], 10);
      order.unit = quantityMatch[2].toLowerCase();
    }

    if (productMatch) {
      order.product = productMatch[1].toLowerCase();
    }
  }

  private parseDeliveryTime(prompt: string, order: Partial<Order>, today: Date) {
    if (this.recurringPattern.test(prompt)) {
      const match = prompt.match(this.recurringPattern);
      if (!match) return;
      
      order.frequency = match[1].toLowerCase();
      order.nextDeliveryDate = this.calculateNextDeliveryDate(match[1]);
      order.isRecurring = true;
      return;
    }

    order.isRecurring = false;
    
    if (this.inXDaysPattern.test(prompt)) {
      const match = prompt.match(this.inXDaysPattern);
      if (!match) return;
      
      const daysToAdd = parseInt(match[1], 10);
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + daysToAdd);
      order.nextDeliveryDate = nextDate;
    }
    else if (this.nextWeekPattern.test(prompt)) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + 7);
      order.nextDeliveryDate = nextDate;
    }
    else if (this.tomorrowPattern.test(prompt)) {
      const nextDate = new Date(today);
      nextDate.setDate(today.getDate() + 1);
      order.nextDeliveryDate = nextDate;
    }
    else if (this.todayPattern.test(prompt)) {
      order.nextDeliveryDate = new Date(today);
    }
    else if (this.nextDayPattern.test(prompt)) {
      const match = prompt.match(this.nextDayPattern);
      if (!match) return;
      
      order.nextDeliveryDate = this.calculateNextSpecificDay(match[1], today);
    }
    else {
      order.nextDeliveryDate = new Date(today);
    }
  }

  private calculateNextDeliveryDate(dayOfWeek: string): Date {
    const today = new Date('2025-01-03T11:28:46+03:00');
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const targetDay = daysOfWeek.indexOf(dayOfWeek.toLowerCase());
    
    let daysUntilTarget = targetDay - today.getDay();
    if (daysUntilTarget <= 0) {
      daysUntilTarget += 7;
    }

    const nextDate = new Date(today);
    nextDate.setDate(today.getDate() + daysUntilTarget);
    return nextDate;
  }

  private calculateNextSpecificDay(dayOfWeek: string, fromDate: Date): Date {
    const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const targetDay = daysOfWeek.indexOf(dayOfWeek.toLowerCase());
    const currentDay = fromDate.getDay();
    
    let daysToAdd = targetDay - currentDay;
    if (daysToAdd <= 0) {
      daysToAdd += 7;
    }
    
    const nextDate = new Date(fromDate);
    nextDate.setDate(fromDate.getDate() + daysToAdd);
    return nextDate;
  }
}