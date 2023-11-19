export abstract class BaseError extends Error {
  public abstract readonly error: string | string[];
  public abstract readonly name: string;
  public abstract readonly message: string;
  public abstract readonly statusCode: number;

  public static isBaseError(error: unknown) {
    return error instanceof BaseError;
  }
}
