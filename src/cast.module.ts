import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Cat, CatSchema } from './schemas/cat.schema';

@Module({
	imports: [MongooseModule.forFeature([{ name: Cat.name, schema: CatSchema }])],
	controllers: [AppController],
	providers: [AppService],
})
export class CastModule {}
