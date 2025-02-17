import { PartialType } from '@nestjs/mapped-types';
import {
  IsDateString,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
} from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  phone: string;

  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;

  @IsDateString()
  updatedAt: Date;
}

export class UpdateCustomerDTO extends PartialType(CreateCustomerDTO) {}
