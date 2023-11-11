pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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
