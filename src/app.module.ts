import { Module } from '@nestjs/common';
import { TranslationsModule } from './translations/translations.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [TranslationsModule],
  providers: [PrismaService],
})
export class AppModule {}
