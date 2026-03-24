pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Sadhana119911/qr-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("qr-app")
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    bat 'docker rm -f qr-container || echo Container does not exist'
                    bat 'docker run -d -p 8000:3000 --name qr-container qr-app'
                }
            }
        }
    }
}