import { IRepositoryData } from "@/modules/shared/infrastructure/data";



export interface IRepository {
	repositoryData: IRepositoryData;
	fetchConfig: RequestInit;
}