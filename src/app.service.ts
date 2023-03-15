import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat, CatDocument } from './schemas/cat.schema';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
	constructor(@InjectModel(Cat.name) private catModel: Model<CatDocument>) {}
	private readonly catDB: Array<{ id: number; name: string; age: number }> = [
		{ id: 1, name: 'Tobi', age: 2 },
		{ id: 2, name: 'Pallina', age: 5 },
		{ id: 3, name: 'Luna', age: 6 },
		{ id: 4, name: 'Leo', age: 10 },
		{ id: 5, name: 'Birba', age: 1 },
	];

	async getAllCats(): Promise<Array<any>> {
		return this.catModel.find();
	}

	async getCatById(id: string): Promise<Array<any>> {
		return this.catModel.findById(id);
	}

	addCat(newCat: { name: string; age: number }): string {
		const catCreated = new this.catModel(newCat);
		catCreated.save();
		return 'New cat added';
	}

	async updateCatById(
		id: string,
		body: { name: string; age: number },
	): Promise<Cat> {
		const cat = await this.catModel.findById(id);
		cat.name = body.name;
		cat.age = body.age;
		cat.save();
		return cat;
	}
	async deleteCatById(id: string): Promise<string> {
		await this.catModel.findByIdAndDelete(id);
		return 'Cat deleted';
	}
}
