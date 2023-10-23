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
          //sh 'npm install'

          sh 'npm run build'
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          sh 'ansible-playbook -i inventory.ini playbook.yml'
        }
      }
    }
  }

  post {
    success {
      emailext body: 'The pipeline succeeded. Here is the link to the build: <a href="https://front-ks.serveo.net">FRONT|KS</a>',
               subject: 'Pipeline Success',
               to: 'kelysaina@gmail.com'
    }
    failure {
      emailext body: 'The pipeline failed. Please check the Jenkins console output for details.',
               subject: 'Pipeline Failure',
               to: 'kelysaina@gmail.com'
    }
  }
}
