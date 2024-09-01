import { Request, Response } from "express";
import ProfileService from "../service/ProfileService";

class ProfileController {

  async updateProfile(req: Request, res: Response) {
    const { username, email } = req.body;
    const { id } = req.params;
    try {
      const userpostResult = await ProfileService.updateProfile(
        id, username, email
      );
      res.json(userpostResult);
    } catch (error) {
      console.error("Error updating profile:", error);
      res.status(500).json({ error: "Unable to update the profile" });
    }
  }
  async getProfile(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const userpostResult = await ProfileService.getProfile(
        id
      );
      res.json(userpostResult);
    } catch (error) {
      console.error("Error getting profile:", error);
      res.status(500).json({ error: "Unable to get the profile" });
    }
  }

}

export default new ProfileController();
