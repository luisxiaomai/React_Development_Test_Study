pipeline {
  agent {
    docker {
      image 'node:6-alpine'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
        sh 'ls'
      }
      post {
        success {
          // publish html
          publishHTML([
            allowMissing: false, 
            alwaysLinkToLastBuild: false, 
            keepAll: true, 
            reportDir: 'coverage', 
            reportFiles: 'lcov-report/index.html',
            reportName: 'Coverage Report', 
            reportTitles: ''
          ])
        }
      }
    }
  }
  post {
    always{
        junit 'junit.xml'
    }
  }
}