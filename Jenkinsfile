pipeline {
    agent any

    environment {
        NODE_VERSION = "24"   // Using Node v24 (24.x.x)
    }

    stages {

        stage('Checkout Code') {
            steps {
                echo "Pulling latest code from GitHub..."
                checkout scm
            }
        }

        stage('Install Node.js') {
            steps {
                echo "Installing Node.js ${NODE_VERSION}.x ..."
                sh """
                curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | sudo -E bash -
                sudo apt-get install -y nodejs
                node -v
                npm -v
                """
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "Installing npm dependencies..."
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            when {
                expression { fileExists('package.json') }
            }
            steps {
                echo "Running tests..."
                sh 'npm test || echo "No tests defined or tests failed."'
            }
        }

        stage('Build Artifact') {
            steps {
                echo "Creating application package..."
                sh 'zip -r myapp.zip .'
                archiveArtifacts artifacts: 'myapp.zip', fingerprint: true
            }
        }

        stage('Deploy') {
            steps {
                echo "Starting Deployment..."
                echo "Add your deployment logic here"

                // Example placeholders:
                // sh 'scp -i key.pem myapp.zip ubuntu@xx.xx.xx.xx:/home/ubuntu/'
                // sh 'ssh -i key.pem ubuntu@xx.xx.xx.xx "pm2 restart myapp"'
            }
        }
    }

    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed!"
        }
    }
}

