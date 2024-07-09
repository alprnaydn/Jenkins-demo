pipeline {
    environment {
        imagename = "ganeshpoloju/jenkinss"
        dockerImage = ''
        containerName = 'my-container'
        
    }
 
    agent any
 
    stages {
        stage('Cloning Git') {
            steps {
                git([url: 'https://github.com/GANESH0369/jenkins.git', branch: 'main'])
                waitForHarborWebHook abortPipeline: true, credentialsId: 'harbor_credentials', server: 'Harbor Example', severity: 'Critical'
            }
        }
 
        stage('Building image') {
            steps {
                script {
                    dockerImage = docker.build "${imagename}:latest"
                }
            }
        }
        
 
    }
}
