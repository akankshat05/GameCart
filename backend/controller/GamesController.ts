import { Request, Response } from "express";
import GamesService from "../service/GamesService";

class GamesController {

  async purchaseGame(req: Request, res: Response) {
    const { userId, gameId } = req.params;
    try {
      const userpostResult = await GamesService.purchaseGame(
        userId,
        gameId
      );
      res.json(userpostResult);
    } catch (error) {
      console.error("Error purchasing:", error);
      res.status(500).json({ error: "Unable to purchase the game" });
    }
  }

   getGameByID(req: Request, res: Response) {
    const { id } = req.params;
    console.log(id)
    const gameId = Number(id)
    try {
      const userpostResult =  GamesService.getGameByID(
        gameId,
      );
      console.log("result" , userpostResult)
      res.json(userpostResult);
    } catch (error) {
      console.error("Error getting games by id:", error);
      res.status(500).json({ error: "Error getting games by id" });
    }
  }

  async getGames(req: Request, res: Response) {
    try {
      const userpostResult = await GamesService.getAllGames()
      res.json(userpostResult);
    } catch (error) {
      console.error("Error getting games:", error);
      res.status(500).json({ error: "Error getting games" });
    }
  }
}

export default new GamesController();
