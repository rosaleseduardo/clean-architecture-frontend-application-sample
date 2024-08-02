import type { ImplementationLogic } from '@entities/counter/domain/logic';

/**
 * Represents the resource implementations for the counter application.
 */
export interface ResourceImplementations {
  /**
   * The implementation of the API client for the counter application.
   */
  ApiClientImplementation: ImplementationLogic.ApiClient;
}
