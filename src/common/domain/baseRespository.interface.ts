export interface BaseRespository<T> {
  create(entity: T): Promise<T>;
  find(query?: any): Promise<T[]>;
  findById(id: string, query?: object): Promise<T | undefined>;
  findOne(query: any): Promise<T | undefined>;
  delete(id: string): Promise<void>;
  update(id: string, dataToUpdate: Partial<T>): Promise<T>;
}
