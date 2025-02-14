import { IApiMarvelAPIResponse } from "@/modules/shared/domain/IResponse";
import {
  getRepositoryData,
  IRepositoryData,
} from "@/modules/shared/infrastructure/data";
import { RequestInit } from "next/dist/server/web/spec-extension/request";
import {
  IGetAllParams,
  IGetAllRepository,
} from "@/modules/shared/domain/IGetAllRepository";
import { IApiComic } from "../domain/IComicResponse";

export class ComicsRepository implements IGetAllRepository<IApiComic> {
  repositoryData: IRepositoryData = getRepositoryData();

  fetchConfig: RequestInit = {
    next: { revalidate: 3600, tags: ["comics"] },
  };

  async getAll(params?: IGetAllParams): Promise<IApiComic[]> {
    let url = `${this.repositoryData.apiHost}characters/${params?.id}/comics?${this.repositoryData.authParams}`;

    const response: Response = await fetch(url, this.fetchConfig);

    if (!response.ok) {
      return [];
    }

    const data: IApiMarvelAPIResponse<IApiComic[]> = await response.json();

    return data.data.results;
  }
}
