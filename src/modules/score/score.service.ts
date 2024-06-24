import { Inject, Injectable } from '@nestjs/common';
import { SCORE_REPOSITORY, ScoreRepository } from '../../domain/repositories';
import { AddGameScoreParams } from '../../domain/repositories/params';

@Injectable()
export class ScoreService {
  constructor(
    @Inject(SCORE_REPOSITORY)
    private readonly scoreRepository: ScoreRepository,
  ) {}

  getScoreByGame(gameId: string) {
    return this.scoreRepository.getScoresByGame(gameId);
  }

  addGameScore(scoreData: AddGameScoreParams) {
    this.scoreRepository.addGameScore(scoreData);
  }
}
