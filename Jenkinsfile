pipeline {
  agent any

  tools {
    nodejs 'NodeJS'
  }

  stages {
    stage('Git') {
      steps {
        // Clone the repository into a specific directory
        git url: 'https://github.com/KelySaina/frontjenkins', branch: 'main'
      }
    }

    stage('Build & Test') {
      steps {
        script {
          // Install dependencies
          sh 'npm install'

          sh 'npm run build'
        }
      }
    }
    stage('Deploy') {
      steps {
        script {
          sh 'sshpass -p "k" scp -r build/ thyler@192.168.57.115:~/frontjenkins/'
        }
      }
    }

}

