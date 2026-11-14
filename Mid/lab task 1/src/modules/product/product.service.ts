import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Product } from "./entity/product.entity";
import { CreateProductDto, UpdateProductDto } from "./dto/product.dto";

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

    async getProduct() {
    try {
      const product = await this.productRepository.find();
      return product;
    } catch (error) {
      throw error;
    }
    }

    async getProductById(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      return product;
    } catch (error) {
      throw error;
    }
  }

    async createProduct(dto: CreateProductDto) {
    try {
      const product = this.productRepository.create(dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

    async updateProduct(id: string, dto: UpdateProductDto) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      Object.assign(product, dto);
      return await this.productRepository.save(product);
    } catch (error) {
      throw error;
    }
  }

    async deleteProduct(id: string) {
    try {
      const product = await this.productRepository.findOne({ where: { id } });
      if (!product) {
        throw new NotFoundException("Product not found");
      }
      await this.productRepository.delete(product);
      return { message: "Product deleted" };
    } catch (error) {
      throw error;
    }
  }
}