import { Request, Response } from "express";
import AuthService from "../service/AuthService";

class AuthController {

  async register(req: Request, res: Response) {
    const { username, email, password } = req.body;
    try {
      const userpostResult = await AuthService.registerUser(
        username,
        email,
        password,
      );
      res.json(userpostResult);
    } catch (error) {
      console.error("Error posting user data:", error);
      res.status(500).json({ error: "Unable to post data" });
    }
  }


  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    console.log(req.body)
    try {
      const loginResult : any = await AuthService.loginUser(email, password);
      console.log("loginResult", loginResult)
      res.json(loginResult);
    } catch (error) {
      console.error("Error logging in user:", error);
      res.status(500).json({ error: "Unable to login user" });
    }
  }
}

export default new AuthController();
