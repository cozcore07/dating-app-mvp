import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private users = new Map<string, string>(); // Simple in-memory user store

  async register(email: string, password: string) {
    if (this.users.has(email)) {
      throw new Error('User already exists');
    }
    this.users.set(email, password);
    return { message: 'User registered successfully' };
  }

  async login(email: string, password: string) {
    const storedPassword = this.users.get(email);
    if (!storedPassword || storedPassword !== password) {
      throw new Error('Invalid credentials');
    }
    return { message: 'Login successful', token: 'dummy-jwt-token' };
  }
}
