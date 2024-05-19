import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { TimeInterface } from '../../infra/entities/Time';
import { DeleteTimeUseCase } from './DeleteTimeUseCase';
import { GetTimeUseCase } from './GetTimeUseCase';
import { PostTimeUseCase } from './PostTimeUseCase';


export class TimeValidateController {

  async get(req: Request, resp: Response) {

    try {
      const registerUseCase = container.resolve(GetTimeUseCase)
      const statusValidate = await registerUseCase.getTime();
      return resp.status(200).json(statusValidate);
    } catch (error) {
      console.error(`Error: ${error}`);
      return resp.status(500).json({ message: `Error: ${error}` });
    }
  }

  async delete(req: Request, resp: Response): Promise<Response> {
    const { id, userId, enterTime, exitTime } = req.body;
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    const registerUseCase = container.resolve(DeleteTimeUseCase)
    const statusValidate = await registerUseCase.deleteTime(dataTime);

    return statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Hora deletada com sucesso!!' })
      : resp.status(statusValidate).json({ message: 'Não foi possivel deletar!' });
  }

  async post(req: Request, resp: Response): Promise<Response> {
    const { id, userId, enterTime, exitTime } = req.body;
    const dataTime: TimeInterface = {
      id,
      userId,
      enterTime,
      exitTime
    };
    const registerUseCase = container.resolve(PostTimeUseCase)
    const statusValidate = await registerUseCase.addTime(dataTime);

    return statusValidate === 200
      ? resp.status(statusValidate).json({ message: 'Hora adicionada com sucesso!' })
      : resp.status(statusValidate).json({ message: 'Não foi possivel adicionar!' });
  }
}
