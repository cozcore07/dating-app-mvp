import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchmakerService {
  private intakeForms: any[] = [];

  async saveIntakeForm(data: any) {
    this.intakeForms.push(data);
    return { message: 'Intake form saved successfully' };
  }
}
