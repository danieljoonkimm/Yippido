import express from 'express';
import {Router} from 'express';

const router = Router();

router.route('/user/addUser')
  .post(AddUserController);