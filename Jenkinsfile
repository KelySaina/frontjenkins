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
      emailext body: 'The pipeline succeeded. Here is the link to the build: https://front-ks.serveo.net',
               subject: 'Pipeline Success',
               to: 'kelysaina@gmail.com',
               from: 'nalyvalisoa0510@gmail.com'
    }
    always {
      emailext body: 'The pipeline failed. Please check the Jenkins console output for details: https://jenkins-ks.serveo.net/job/$BUILD_NUMBER/$PROJECT_NAME/console',
               subject: 'Pipeline Failure',
               to: 'kelysaina@gmail.com',
               from: 'nalyvalisoa0510@gmail.com'
    }
  }
}
