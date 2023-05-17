import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TranslateFrom } from './entities/translate-from.entity';
import { Translation, Prisma } from '@prisma/client';

@Injectable()
export class TranslationsService {
  constructor(private readonly prisma: PrismaService) {}

  create(translation: Prisma.TranslationCreateInput) {
    return this.prisma.translation.create({ data: translation });
  }

  async getTranslationsList(
    type: TranslateFrom,
    part: string,
    limit: number,
    offset: number,
  ) {
    return this.prisma.translation.findMany({
      where: {
        firstLangTranslation:
          type === TranslateFrom.FirstLang ? { contains: part } : undefined,
        secondLangTranslation:
          type === TranslateFrom.SecondLang ? { contains: part } : undefined,
      },
      skip: offset,
      take: limit,
      select: {
        id: true,
        firstLangTranslation: true,
        secondLangTranslation: true,
      },
    });
  }

  deleteById(translationId: Translation['id']) {
    return this.prisma.translation.delete({ where: { id: translationId } });
  }
}
