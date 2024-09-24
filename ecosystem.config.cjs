module.exports = {
  apps: [{
    name: "my-react-app",
    script: "yarn",
    args: "start",
    env: {
      NODE_ENV: "production",
    },
  }],
  deploy: {
    production: {
      user: 'root',
      host: '110.42.138.166',
      ref: 'origin/master',
      repo: 'git@github.com:szc807414589/my-react-app.git',
      path: '/var/www/my-react-app',
      'pre-deploy-local': '',
      'post-deploy': 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};