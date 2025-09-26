pipeline {
    agent any  // runs on any available Jenkins node

    environment {
        NODE_ENV = 'development'
        PORT = '5000'
        SLACK_CHANNEL = '#waithera_ip1'
        SLACK_CREDENTIAL_ID = 'slack-token' // Jenkins credential ID
        RENDER_URL = 'https://gallery-cera.onrender.com/'
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out the repository...'
                git branch: 'master', url: 'https://github.com/Waithera-Macharia-J/gallery.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm dependencies...'
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                echo 'Running tests for Milestone 3...'
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

        stage('Deploy to Render') {
            steps {
                echo 'Deploying to Render...'
                // This assumes you have connected Render CLI or just restart server
                // If Render auto-deploys from GitHub, just pushing triggers deploy
                sh 'echo "Deploy completed. Visit ${RENDER_URL}"'
            }
        }
    }

    post {
        success {
            slackSend(channel: "${SLACK_CHANNEL}",
                      color: 'good',
                      message: "🎉 Build #${env.BUILD_NUMBER} succeeded! Website deployed at ${RENDER_URL}")
        }
        failure {
            slackSend(channel: "${SLACK_CHANNEL}",
                      color: 'danger',
                      message: "⚠️ Build #${env.BUILD_NUMBER} failed. Check Jenkins logs.")
        }
    }
}
