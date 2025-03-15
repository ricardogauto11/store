import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateBrandDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'URL of the brand logo' })
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}
