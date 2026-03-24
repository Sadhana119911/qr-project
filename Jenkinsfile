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
                    sh 'docker rm -f qr-container || true'
                    sh 'docker run -d -p 7000:7000 --name qr-container qr-app'
                }
            }
        }

    }
}