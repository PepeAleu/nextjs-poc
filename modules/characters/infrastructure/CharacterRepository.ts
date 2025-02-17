import { IGetRepository } from "@/modules/shared/domain/IGetRepository";
import { IApiMarvelAPIResponse } from "@/modules/shared/domain/IResponse";
import { getRepositoryData } from "@/modules/shared/infrastructure/data";
import { IApiCharacter } from "../domain/ICharacterResponse";
import { redirect } from "next/navigation";
import { IGetAllParams, IGetAllRepository } from "@/modules/shared/domain/IGetAllRepository";


export class CharacterRepository implements IGetRepository<IApiCharacter>, IGetAllRepository<IApiCharacter> {

  repositoryData = getRepositoryData();

  fetchConfig = {
    next: { revalidate: 3600, tags: ["characters"] },
  };

  async getOne(id: string): Promise<IApiCharacter> {
    let url = `${this.repositoryData.apiHost}characters/${id}?${this.repositoryData.authParams}`;

    try {
      const response: Response = await fetch(url, this.fetchConfig);

      if (!response.ok) {
        if (response.status === 404) {
          redirect("/");
        }
        throw new Error(`Get character error: ${response.statusText}`);
      }

      const data: IApiMarvelAPIResponse<[IApiCharacter]> = await response.json();

      return data.data.results[0];
    } catch (error) {
      redirect("/");
    }

  }

  async getAll(params?: IGetAllParams): Promise<IApiCharacter[]> {
    let url = `${this.repositoryData.apiHost}characters?${this.repositoryData.authParams}&limit=${this.repositoryData.limitCharacters}`;

    if (params?.nameStartsWith) {
      url += `&nameStartsWith=${encodeURIComponent(params.nameStartsWith)}`;
    }

    try {
      const response: Response = await fetch(url, this.fetchConfig);

      if (!response.ok) {
        throw new Error(`Get characters error: ${response.statusText}`);
      }

      const data: IApiMarvelAPIResponse<IApiCharacter[]> = await response.json();

      return data.data.results;
    } catch (error) {
      redirect("/");
    }


  }

}