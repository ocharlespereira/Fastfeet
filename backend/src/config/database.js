module.exports = {
  dialect: 'postgres',
  host: '192.168.99.100', // 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'fastfeet',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    timezone: '-03:00',
  },
  dialectOptions: {
    useUTC: false, // for reading from database
    timezone: '-03:00',
  },
};
