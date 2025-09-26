pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
        PORT = '5000'
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
                    // Send email if tests fail
                    mail to: 'your-email@example.com',
                         subject: "Build Failed: Milestone 3",
                         body: "Tests failed in Jenkins. Check the build logs for details."
                }
            }
        }

        stage('Deploy to Render') {
            steps {
                // Replace this with your Render deployment command if needed
                sh 'node server.js &'
            }
        }
    }

    post {
        success {
            echo "Milestone 3 pipeline completed successfully!"
        }
    }
}
