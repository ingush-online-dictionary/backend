import {
  Controller,
  Get,
  ParseEnumPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslateFrom } from './entities/translate-from.entity';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Get('/')
  getTranslations(
    @Query('part') part: string,
    @Query('translateFrom', new ParseEnumPipe(TranslateFrom))
    type: TranslateFrom,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.translationsService.getTranslationsList(
      type,
      part,
      limit,
      offset,
    );
  }
}
