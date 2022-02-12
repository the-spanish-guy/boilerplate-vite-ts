import { ICatApi } from '@/interfaces/CatApiInterface'
import BasicService from './HttpServices'

class CatService extends BasicService {
  constructor() {
    super(process.env.VITE_CAT_DOMAIN as string)
  }

  public async getCat(): Promise<ICatApi[]> {
    return (await this.connection.get<ICatApi[]>('/search')).data
  }
}

export default CatService
