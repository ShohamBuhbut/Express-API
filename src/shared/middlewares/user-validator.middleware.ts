import { Request, Response, NextFunction } from 'express';
import {
  changePasswordValidationSchema,
  createUserValidationSchema,
  updateUserValidationSchema,
  getUserIdValidationSchema,
} from '../validators/user.joi.validator';

export const createUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: 'Missing request body!' });
    }

    await createUserValidationSchema.validateAsync(req.body);

    next();
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export const updateUserValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params?.id) {
      return res
        .status(400)
        .send({ message: 'Required parameter "id" is missing!' });
    }

    if (!req.body) {
      return res.status(400).send({ message: 'Missing request body!' });
    }

    if (req.body.password || req.body.new_password) {
      return res.status(400).send({ message: 'Invalid change requested!' });
    }

    await updateUserValidationSchema.validateAsync(req.body);

    next();
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export const changePasswordValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: 'Missing request body!' });
    }

    await changePasswordValidationSchema.validateAsync(req.body);

    next();
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};

export const getUserByIdValidator = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.params?.id) {
      return res
        .status(400)
        .send({ message: 'Required parameter "id" is missing!' });
    }

    await getUserIdValidationSchema.validateAsync(req.params);
    next();
  } catch (e: any) {
    res.status(400).send({ message: e.message });
  }
};
