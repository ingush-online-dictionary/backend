import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseEnumPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslateFrom } from './entities/translate-from.entity';
import { CreateTranslationDto } from './dto/create-translation.dto';

@Controller('translations')
export class TranslationsController {
  constructor(private readonly translationsService: TranslationsService) {}

  @Post('/')
  create(@Body() dto: CreateTranslationDto) {
    return this.translationsService.create(dto);
  }

  @Get('/')
  getTranslationsList(
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

  @Get('/dropdown')
  getDropdownTranslations(
    @Query('part') part: string,
    @Query('translateFrom', new ParseEnumPipe(TranslateFrom))
    type: TranslateFrom,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('offset', ParseIntPipe) offset: number,
  ) {
    return this.translationsService.getDropdownTranslations(
      type,
      part,
      limit,
      offset,
    );
  }

  @Delete('/:translationId')
  deleteById(@Param('translationId') translationId: string) {
    return this.translationsService.deleteById(translationId);
  }
}
