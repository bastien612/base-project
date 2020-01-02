import { ConstantsService } from '../services/constant-service/constant.service';
import { constantsInitializer } from './constants.initializer';

export function coreInitializerFactory(constantsService: ConstantsService) {
  return (): Promise<any> => {
    return constantsInitializer(constantsService);
  };
}
