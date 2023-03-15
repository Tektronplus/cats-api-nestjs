import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Cat } from './schemas/cat.schema';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get('/cats/all')
	async getListCats(): Promise<Array<any>> {
		return this.appService.getAllCats();
	}

	@Get('/cats/:id')
	async getCatById(@Param() param): Promise<Array<any>> {
		return this.appService.getCatById(param.id);
	}

	@Post('/cats/add')
	postBody(@Body() body: { name: string; age: number }): string {
		return this.appService.addCat(body);
	}

	@Put('/cats/update/:id')
	async updateCatById(
		@Param() param,
		@Body() body: { name: string; age: number },
	): Promise<Cat> {
		return this.appService.updateCatById(param.id, body);
	}

	@Delete('/cats/delete/:id')
	async deleteCatById(@Param() param): Promise<string> {
		return this.appService.deleteCatById(param.id);
	}
}
