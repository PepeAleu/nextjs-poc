import { IRepository } from "./IRepository";

export interface IGetRepository<T> extends IRepository {

	getOne(id: string): Promise<T>;

}