import { Prisma } from '@prisma/client';
import { IsString, MaxLength } from 'class-validator';

export class CreateTranslationDto implements Prisma.TranslationCreateInput {
  @IsString()
  @MaxLength(100)
  firstLangTranslation: string;

  @IsString()
  @MaxLength(400)
  firstLangDescription: string;

  @IsString()
  @MaxLength(100)
  secondLangTranslation: string;

  @IsString()
  @MaxLength(400)
  secondLangDescription: string;
}
