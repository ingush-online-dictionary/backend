import {
  Controller,
  Get,
  ParseEnumPipe,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { DictionaryService } from './dictionary.service';
import { TranslateFrom } from './entities/translate-from.entity';

@Controller('dictionary')
export class DictionaryController {
  constructor(private readonly dictionaryService: DictionaryService) {}

  @Get('/get-words-by-part')
  getWordsByPart(
    @Query('part') part: string,
    @Query('translateFrom', new ParseEnumPipe(TranslateFrom))
    type: TranslateFrom,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.dictionaryService.getTranslationsList(
      type,
      part,
      limit,
      offset,
    );
  }
}
