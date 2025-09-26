pipeline {
    agent {
        docker { image 'node:18' }  // runs all stages in Node 18 container
    }

    environment {
        NODE_ENV = 'development'
        PORT = '5000'
        SLACK_CHANNEL = '#Waithera_IP1'
        SLACK_CREDENTIAL_ID = 'slack-token'
        RENDER_URL = 'https://gallery-cera.onrender.com/'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Waithera-Macharia-J/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
            post {
                failure {
                    mail to: 'your-email@example.com',
                         subject: "Build Failed",
                         body: "Tests failed. Check Jenkins logs."
                }
            }
        }

        stage('Deploy') {
            steps {
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            slackSend(channel: "${SLACK_CHANNEL}",
                      color: 'good',
                      message: "Build #${env.BUILD_NUMBER} succeeded! Website deployed at ${RENDER_URL}")
        }
        failure {
            slackSend(channel: "${SLACK_CHANNEL}",
                      color: 'danger',
                      message: "Build #${env.BUILD_NUMBER} failed. Check Jenkins logs.")
        }
    }
}
