import { HealthCheckController } from '../../../../../3-inteface-adapters/controllers/health-check.controller'

export const makeHealthCheckController = (): HealthCheckController => {
  return new HealthCheckController()
}
