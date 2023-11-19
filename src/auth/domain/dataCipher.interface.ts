export interface DataCipher {
  hash(data: string): Promise<string>;
  compare(data: string, hashedData: string): Promise<boolean>;
}
