import mysql from 'mysql2/promise';
import { dbConfig } from '../config/dbConfig.js';

const pool = mysql.createPool(dbConfig);

class UserModel {
  async findById(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0];
  }

  async create({ username, password, email }) {
    const [result] = await pool.query(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, password, email]
    );
    return result.insertId;
  }

  async update(id, { username, password, email }) {
    await pool.query(
      'UPDATE users SET username = ?, password = ?, email = ? WHERE id = ?',
      [username, password, email, id]
    );
  }

  async delete(id) {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  }
}

export default new UserModel();
