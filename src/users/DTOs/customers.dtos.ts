import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateCustomerDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty()
  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;

  @ApiProperty()
  @IsDateString()
  updatedAt: Date;
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}
