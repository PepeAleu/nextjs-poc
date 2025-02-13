import { IRepository } from "./IRepository";

export interface IGetAllParams {
	nameStartsWith?: string;
	id?: string;
}

export interface IGetAllRepository<T> extends IRepository {

	getAll(params: IGetAllParams): Promise<T[]>;

}