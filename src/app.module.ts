import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CastModule } from './cast.module';

@Module({
	imports: [MongooseModule.forRoot('<linkmongo>'), CastModule],
})
export class AppModule {}
