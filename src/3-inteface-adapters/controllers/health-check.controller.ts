import { type Request, type Response } from 'express'

export class HealthCheckController {
  async handle (req: Request, res: Response): Promise<void> {
    res.status(200).json({ status: 'UP' })
  }
}
