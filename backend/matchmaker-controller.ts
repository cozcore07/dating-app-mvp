import { Controller, Post, Body } from '@nestjs/common';
import { MatchmakerService } from './matchmaker.service';

@Controller('matchmaker')
export class MatchmakerController {
  constructor(private readonly matchmakerService: MatchmakerService) {}

  @Post('intake')
  async intakeForm(@Body() body: any) {
    return this.matchmakerService.saveIntakeForm(body);
  }
}
