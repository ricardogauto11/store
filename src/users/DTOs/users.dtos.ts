import { PartialType } from '@nestjs/mapped-types';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @IsDate()
  @IsNotEmpty()
  readonly createdAt: Date;

  @IsDate()
  readonly updatedAt: Date;
}

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
