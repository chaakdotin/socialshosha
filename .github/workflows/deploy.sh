name: Deploys

on:
  push:
    branches: ["master"]
  pull_request:
    branches: ["master"]

jobs:
  deploy:
    runs-on: ubuntu-latest  # Specify the runner

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Deploy to Server
        uses: appleboy/ssh-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          port: ${{ secrets.PORT }}
          key: ${{ secrets.SSHKEY }}
          script: |
            cd /var/www/html/socialshosha || exit 1
            chmod +x .scripts/deploy.sh
            .scripts/deploy.sh


name: Deploy React App

on:
  push:
    branches:
      - main  # Change branch if needed

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Repository
        uses: actions/checkout@v3

      - name: Install Dependencies
        run: npm install

      - name: Build Project
        run: npm run build

      - name: Deploy to VPS
        uses: appleboy/scp-action@master
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.SSHKEY }}
          source: "dist/*"
          target: "/var/www/html/socialshosha"

      