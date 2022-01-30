import { TaskStatus } from '../tasks.model';

export class GetTasksDto {
  status?: TaskStatus;
  search?: string;
}
