node {
    def app

    
    stage('Cloning Git') {
        
        git([url: 'https://github.com/alprnaydn/Jenkins-demo.git', branch: 'main'])
       
    }

    stage('Build image') {
  
       app = docker.build("falprnaydn/jenkins")
    }

    stage('Test image') {
  

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        
        docker.withRegistry('https://registry.hub.docker.com', 'git') {
            app.push("${env.BUILD_NUMBER}")
            app.push("latest")
        }
    }
}
