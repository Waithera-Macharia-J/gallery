pipeline {
    agent { docker { image 'node:18' } } // ensures Node 18 available

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Build complete (no tests yet)"'
            }
        }

        stage('Deploy to Render') {
            steps {
                withCredentials([string(credentialsId: 'RENDER_HOOK', variable: 'HOOK')]) {
                    sh 'curl -X POST "$HOOK"'
                }
            }
        }
    }
}
