import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { TranslateFrom } from './entities/translate-from.entity';
import { Translation } from '@prisma/client';

@Injectable()
export class DictionaryService {
  constructor(private readonly prisma: PrismaService) {}

  async getTranslationsList(
    type: TranslateFrom,
    part: string,
    limit: number,
    offset: number,
  ) {
    let translations: Pick<
      Translation,
      'id' | 'firstLangTranslation' | 'secondLangTranslation'
    >[] = [];

    switch (type) {
      case TranslateFrom.FirstLang:
        console.log('first');
        translations = await this.prisma.translation.findMany({
          where: { firstLangTranslation: { contains: part } },
          skip: offset,
          take: limit,
          select: {
            id: true,
            firstLangTranslation: true,
            secondLangTranslation: true,
          },
        });
        break;
      case TranslateFrom.SecondLang:
        translations = await this.prisma.translation.findMany({
          where: { secondLangTranslation: { contains: part } },
          skip: offset,
          take: limit,
          select: {
            id: true,
            firstLangTranslation: true,
            secondLangTranslation: true,
          },
        });
        break;
    }

    return translations;
  }
}
