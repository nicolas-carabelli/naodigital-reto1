pipeline {
    agent any

    stages {
        stage('Checkout SCM') {
            steps {
                script {
                    checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: 'jenkins-credentialss', url: 'https://github.com/nicolas-carabelli/naodigital-reto1']]])
                }
            }
        }

        stage('Install nvm') {
            steps {
                script {
                    // Install nvm
                    sh '''
                        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
                        export NVM_DIR="$HOME/.nvm"
                        [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
                        [ -s "$NVM_DIR/bash_completion" ] && . "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
                    '''
                }
            }
        }

        stage('Install Serverless') {
            steps {
                // Add your serverless installation steps here
            }
        }

        stage('Deploy to AWS') {
            steps {
                // Add your AWS deployment steps here
            }
        }
    }

    post {
        failure {
            echo 'One or more stages failed!'
        }
    }
}

