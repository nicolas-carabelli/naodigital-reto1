pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Use Node.js 16.20.2') {
            steps {
                script {
                    sh 'nvm install 16.20.2'
                    sh 'nvm use 16.20.2'
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
