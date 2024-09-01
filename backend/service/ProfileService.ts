import db from "../config/connectToDB"
class ProfileService {

  async updateProfile(id: string, username: string, email: string) {
    try {
      const sql = 'UPDATE users SET username = ?, email = ? WHERE id = ?';
      db.execute(sql, [username, email, id], (err, result) => {
        if (err) throw new Error()
        return({ message: 'Profile updated successfully' });
      });
    } catch (error) {
      throw new Error()
    }
  }

  async getProfile(id: string) {
    try {
      const sql = 'SELECT id, username, email FROM users WHERE id = ?';
      db.execute(sql, [id], (err, users: any) => {
        if (err || users.length === 0) throw new Error()
        return users
      });
    } catch (error) {
      throw new Error()
    }
  }

}
export default new ProfileService();
