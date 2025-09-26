pipeline {
    agent any

    environment {
        RENDER_URL = "https://gallery-cera.onrender.com" // Render app URL
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build & Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sh 'node server.js &'
            }
        }

        stage('Notify Slack') {
            steps {
                slackSend(
                    channel: '#waithera_ip1', // Slack channel
                    color: 'good', 
                    message: "🚀 Build #${env.BUILD_NUMBER} succeeded!\nRender URL: ${env.RENDER_URL}"
                )
            }
        }
    }

    post {
        failure {
            slackSend(
                channel: '#waithera_ip1',
                color: 'danger',
                message: "❌ Build #${env.BUILD_NUMBER} failed. Check Jenkins for details: ${env.BUILD_URL}"
            )
        }
    }
}
