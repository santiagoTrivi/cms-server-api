export interface BaseRespository<T> {
  create(entity: T): Promise<T>;
  findAll(): Promise<T[]>;
  findById(id: any): Promise<T | undefined>;
  findby(element: any): Promise<T | undefined>;
  delete(id: string): Promise<void>;
  update(dataToUpdate: Partial<T>): Promise<T>;
}
