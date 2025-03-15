import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCategoryDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}

export class UpdateCategoryDTO extends PartialType(CreateCategoryDTO) {}
