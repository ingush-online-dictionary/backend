import { Module } from '@nestjs/common';
import { TranslationsService } from './translations.service';
import { TranslationsController } from './translations.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [TranslationsController],
  providers: [TranslationsService, PrismaService],
})
export class TranslationsModule {}
