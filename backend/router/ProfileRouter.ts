import express from "express";
import ProfileController from "../controller/ProfileController";

const ProfileRouter = express.Router();

ProfileRouter.put('/:id',  ProfileController.updateProfile)
ProfileRouter.get('/:id', ProfileController.getProfile)


export default ProfileRouter;
