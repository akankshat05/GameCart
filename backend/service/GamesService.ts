import db from "../config/connectToDB"
class GamesService {

  async purchaseGame(userId: string, gameId: string) {
    try {
      const sql = 'INSERT INTO purchases (user_id, game_id) VALUES (?, ?)';
      db.execute(sql, [userId, gameId], (err, result) => {
        if (err) throw new Error()
          else return ({ message: 'Profile updated successfully' });
      });
    } catch (error) {
      throw new Error()
    }
  }

   getGameByID(id: number) {
    let game : any = undefined
    try {
        db.query('SELECT * FROM games WHERE id = ?', [id], (err, results) => {
        game = results[0]
        if (err) throw err;
        return game
      });
    } catch (error) {
      console.error('Error fetching game by ID:', error);
      throw new Error('An error occurred while fetching the game');
    }
    return game;
  }
  
  
  async getAllGames() {
    try {
      const sql = 'SELECT * FROM games';
      db.query(sql, (err, games) => {
        if (err) throw new Error()
        else return ({ message: games });
      });
    } catch (error) {
      throw new Error()
    }
  }
}
export default new GamesService();
