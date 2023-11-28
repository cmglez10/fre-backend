export interface DbConfig {
  database: string;
  username: string;
  password: string;
  host: string;
  port: number;
}

export interface MainConfig {
  db: DbConfig;
}
