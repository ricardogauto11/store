import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntCustomPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const data = parseInt(value, 10);
    if (isNaN(data)) {
      throw new BadRequestException(
        `Validation failed. "${value}" is not an integer`,
      );
    }
    return data;
  }
}
