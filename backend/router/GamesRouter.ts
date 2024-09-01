import express from "express";
import GamesController from "../controller/GamesController";

const GamesRouter = express.Router();

GamesRouter.post('/:userId/:gameId',  GamesController.purchaseGame)
GamesRouter.get('/games/:id',  GamesController.getGameByID)
GamesRouter.get('/games', GamesController.getGames)

export default GamesRouter;
