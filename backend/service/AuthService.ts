
import bcrypt from 'bcryptjs';
import db from "../config/connectToDB"
import jwt from "jsonwebtoken"
class AuthService {

  async registerUser(username: string, email: string, password: string) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
      db.execute(sql, [username, email, hashedPassword], (err, result) => {
        if (err) throw new Error()
        return ({ message: 'User registered successfully' });
      });
    } catch (error) {
      throw new Error()
    }
  }

  async loginUser(email: string, password: string) {
    try {
      const sql = 'SELECT * FROM users WHERE email = ?';
      let res : any
      const [users]: any = await new Promise((resolve, reject) => {
        db.execute(sql, [email], (err, results) => {
          if (err) reject(err);
          else resolve(results);
          res = results
        });
      }
    );
      if (users.length === 0) {
        throw new Error('User not found');
      }
      const user = res[0];
      console.log("user", user)
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Invalid password');
      }
      const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'default_secret', { expiresIn: '1h' });
      return {
        message: 'Login successful',
        user: { id: user.id, username: user.username, email: user.email },
        token,
      };
    } catch (error) {
      console.error(error);
      throw new Error(error.message || 'Login failed');
    }
  }
}
export default new AuthService();
