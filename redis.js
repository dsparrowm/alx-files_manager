#!/usr/bin/node
import { createClient } from 'redis';

class RedisClient {
	constructor() {
		this.client = createClient();
		this.client.on('error', err => console.log(err))
		this.connected = false;
		this.client.on('connect', () => {
			this.connected = true;
		});
	}

	isAlive() {
		return this.connected;
	}

	async get(key) {
		return await this.client.get(key);
	}
}
