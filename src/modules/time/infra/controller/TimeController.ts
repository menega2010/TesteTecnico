import { Request, Response } from 'express';
import { TimeInterface } from '../../../../interfaces/TimeInterface/TimeInterface';
import { ValidateTimeCase } from '../../../useCases/validateTime/ValidateTimeCase';
import { TimeRepository } from '../repository/TimeRepository';
import { TimeService } from '../service/TimeService';

const factory = () => {
  const timeRepository = new TimeRepository();
  const timeService = new TimeService(timeRepository);
  const timeCase = new ValidateTimeCase(timeService);
  return timeCase;
};

export class TimeController {
  constructor() {}

  async post(req: Request, resp: Response): Promise<Response> {
    const { id, userId, enterTime, exitTime } = req.body;
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    const statusValidate = await factory().addTime(dataTime);

    return statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Hora adicionada com sucesso!' })
      : resp.status(statusValidate).json({ message: 'Não foi possivel adicionar!' });
  }

  async delete(req: Request, resp: Response): Promise<Response> {
    const { id, userId, enterTime, exitTime } = req.body;
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    const statusValidate = await factory().deleteTime(dataTime);

    return statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Hora deletada com sucesso!!' })
      : resp.status(statusValidate).json({ message: 'Não foi possivel deletar!' });
  }

  async get(req: Request, resp: Response): Promise<Response> {
    try {
      const statusValidate = await factory().getAll();
      return resp.status(200).json(statusValidate);
    } catch (error) {
      console.error(`Error: ${error}`);
      return resp.status(500).json({ message: `Error: ${error}` });
    }
  }
}
