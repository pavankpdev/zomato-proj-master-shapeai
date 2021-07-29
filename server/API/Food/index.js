// Libraries
import express from "express";
import passport from "passport";

// Database modal
import { FoodModel } from "../../database/allModels";

const Router = express.Router();

/*
Route     /
Des       Get all the restaurant details based in city
Params    none
Access    Public
Method    GET  
*/
