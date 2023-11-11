pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install nvm') {
            steps {
                script {
                    sh 'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash'
                    sh 'export NVM_DIR="$HOME/.nvm"'
                    sh '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"'
                    sh '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"'
                    sh 'nvm install 14'
                        }
                    }
        }
        stage('Install Serverless') {
            steps {
                script {
                    sh 'npm install serverless'
                }
            }
        }

        stage('Deploy to AWS') {
            steps {
                script {
                    sh 'serverless deploy'
                }
            }
        }
    }
}
