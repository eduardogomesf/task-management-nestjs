import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../enum/task-status.enum';

export class GetTasksDto {
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
