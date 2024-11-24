/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import productValidationSchema, {
  ObjectIdValidationSchema,
  optionalProductSchema,
  Searchtemschemavalidation,
} from './product.validation';
import { productServices } from './product.service';

//create a Biclycle
const createBicycle = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const zodvalidedata = productValidationSchema.parse(body);
    const result = await productServices.createBicycletoDB(zodvalidedata);
    res.status(200).json({
      message: 'Bicycle created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//find all Biclcyle
const getallBiclcyle = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;

    if (searchTerm) {
      const validateSearchtrm = Searchtemschemavalidation.parse(searchTerm);
      const result =
        await productServices.getsearchTermbicycledatatoDB(validateSearchtrm);
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        success: true,
        data: result,
      });
    } else {
      const result = await productServices.getallproducts();
      res.status(200).json({
        message: 'Bicycles retrieved successfully',
        success: true,
        data: result,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};
//find single Biclcyle with id
const getSingleBicycle = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productIdValidation = ObjectIdValidationSchema.parse(productId);
    const result =
      await productServices.getSinglebicycledatatoDB(productIdValidation);
    res.status(200).json({
      message: 'Bicycle retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//update single bicleyle with id
const updateSingleBicycleData = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productIdValidation = ObjectIdValidationSchema.parse(productId);
    const updatedata = req.body;
    const updatedatawithValidation = optionalProductSchema.parse(updatedata);
    const result = await productServices.updateSinglebicycledatatoDB(
      productIdValidation,
      updatedatawithValidation,
    );
    res.status(200).json({
      message: 'Bicycle updated successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

//delete single data with id
const deleteSingBicycleData = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const productIdValidation = ObjectIdValidationSchema.parse(productId);
    const result =
      await productServices.deleteSinglebicycledatatoDB(productIdValidation);
    res.status(200).json({
      message: 'Bicycle deleted successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Validation failed',
      success: false,
      error: error,
      stack: error.stack,
    });
  }
};

export const productController = {
  createBicycle,
  getallBiclcyle,
  getSingleBicycle,
  updateSingleBicycleData,
  deleteSingBicycleData,
};
