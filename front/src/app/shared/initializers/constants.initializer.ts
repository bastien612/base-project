import { ConstantsService } from '../services/constant-service/constant.service';

export function constantsInitializer(
  constantService: ConstantsService
): Promise<Map<string, string>> {
  return constantService.initialize().then(response => response);
}
