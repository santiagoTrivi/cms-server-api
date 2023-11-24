import { query } from 'express';
import {
  DeepPartial,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class TypeOrmAbstractRepository<T> {
  constructor(private readonly repository: Repository<T>) {}

  async create(entity: T): Promise<T> {
    return this.repository.create(entity);
  }
  async find(query?: FindOneOptions<T>): Promise<T[]> {
    return this.repository.find(query);
  }
  async findById(query?: FindOptionsWhere<T>): Promise<T> {
    return this.repository.findOneBy(query);
  }
  async findOne(query: FindOneOptions<T>): Promise<T> {
    return this.repository.findOne(query);
  }
  async delete(query?: FindOptionsWhere<T>): Promise<unknown> {
    return this.repository.delete(query);
  }
  async update(
    query: FindOptionsWhere<T>,
    payload: QueryDeepPartialEntity<T>,
  ): Promise<unknown> {
    return this.repository.update(query, payload);
  }
}
