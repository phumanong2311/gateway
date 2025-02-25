import { HttpService } from '@nestjs/axios';
import { Injectable, Query } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { PaginationWarehouseDto } from '../dtos';

@Injectable()
export class WarehouseService {
  private warehouseApiUrl: string = 'http://localhost:4000/warehouse';

  constructor(private readonly httpService: HttpService) {}
  async getWarehouseById(warehouseId: string) {
    console.log('API Base URL:', this.warehouseApiUrl);
    console.log(
      'Full Request URL:',
      `${this.warehouseApiUrl}/warehouses/${warehouseId}`,
    );
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.warehouseApiUrl}/${warehouseId}`),
      );
      return response.data;
    } catch (error) {
      console.error(
        `Error fetching warehouse:`,
        error.response?.data || error.message,
      );
      throw new Error(`Error fetching warehouse: ${error.message}`);
    }
  }

  async findWarehousesWithPagination(query: PaginationWarehouseDto) {
    const queryParams = new URLSearchParams();
    if (query.limit) queryParams.append('limit', query.limit.toString());
    if (query.page) queryParams.append('page', query.page.toString());
    if (query.name) queryParams.append('name', query.name);
    if (query.code) queryParams.append('code', query.code);
    if (query.address) queryParams.append('address', query.address);
    if (query.email) queryParams.append('email', query.email);
    if (query.phone) queryParams.append('phone', query.phone);
    if (query.created_at)
      queryParams.append('created_at', query.created_at.toString());
    if (query.updated_at)
      queryParams.append('updated_at', query.updated_at.toString());
    if (query.created_by)
      queryParams.append('.created_by', query.created_by.toString());
    if (query.updated_by)
      queryParams.append('up.updated_by', query.updated_by.toString());
    if (query.created_by) queryParams.append('created_by', query.created_by);
    if (query.sort) {
      queryParams.append('sort[field]', query.sort.field);
      queryParams.append('sort[order]', query.sort.order);
    }
    try {
      const response = await firstValueFrom(
        this.httpService.get(
          `${this.warehouseApiUrl}?${queryParams.toString()}`,
        ),
      );
      return response.data;
    } catch (error) {
      throw new Error(`Error fetching warehouses: ${error.message}`);
    }
  }

  async createWarehouse(data: any) {
    const response = await firstValueFrom(
      this.httpService.post(this.warehouseApiUrl, data),
    );
    return response.data;
  }
}
