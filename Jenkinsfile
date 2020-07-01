pipeline {
  agent { node { label 'nodejs' } }
  stages {
    stage('install') {
      steps {
        sh 'npm ci'
      }
    }
    stage('check') {
      steps {
        parallel (
          lint: {
              sh 'npm run lint'
          },
          unitTest: {
              sh 'npm run test'
          }
                )
      }
    }
    stage('build') {
      steps {
        sh 'npx tsc'
      }
    }
  }
}
