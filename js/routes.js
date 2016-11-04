angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('meuCartO1', {
    url: '/meuCartao1',
    templateUrl: 'templates/meuCartO1.html',
    controller: 'meuCartO1Ctrl'
  })

  .state('redefinirSenha', {
    url: '/redefinirSenha',
    templateUrl: 'templates/redefinirSenha.html',
    controller: 'redefinirSenhaCtrl'
  })

  .state('cadastrar', {
    url: '/cadastrar',
    templateUrl: 'templates/cadastrar.html',
    controller: 'cadastrarCtrl'
  })

  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('opEs', {
    url: '/opcoes',
    templateUrl: 'templates/opEs.html',
    controller: 'opEsCtrl'
  })

  .state('notificaEs', {
    url: '/notificacoes',
    templateUrl: 'templates/notificaEs.html',
    controller: 'notificaEsCtrl'
  })

  .state('novidades', {
    url: '/novidades',
    templateUrl: 'templates/novidades.html',
    controller: 'novidadesCtrl'
  })

  .state('cadastroSalvo', {
    url: '/page11',
    templateUrl: 'templates/cadastroSalvo.html',
    controller: 'cadastroSalvoCtrl'
  })

  .state('vacinaSalva', {
    url: '/page12',
    templateUrl: 'templates/vacinaSalva.html',
    controller: 'vacinaSalvaCtrl'
  })

  .state('LtimasVacinas', {
    url: '/page13',
    templateUrl: 'templates/LtimasVacinas.html',
    controller: 'LtimasVacinasCtrl'
  })

  .state('meuCartO2', {
    url: '/page15',
    templateUrl: 'templates/meuCartO2.html',
    controller: 'meuCartO2Ctrl'
  })

  .state('vacinasTomadas', {
    url: '/page16',
    templateUrl: 'templates/vacinasTomadas.html',
    controller: 'vacinasTomadasCtrl'
  })

  .state('vacinasPendentes', {
    url: '/page17',
    templateUrl: 'templates/vacinasPendentes.html',
    controller: 'vacinasPendentesCtrl'
  })

  .state('vacina', {
    url: '/page10',
    templateUrl: 'templates/vacina.html',
    controller: 'vacinaCtrl'
  })

  .state('adicionarVacina', {
    url: '/page14',
    templateUrl: 'templates/adicionarVacina.html',
    controller: 'adicionarVacinaCtrl'
  })

  .state('confirmarVacina', {
    url: '/page18',
    templateUrl: 'templates/confirmarVacina.html',
    controller: 'confirmarVacinaCtrl'
  })

  .state('confirmarCDigo', {
    url: '/page19',
    templateUrl: 'templates/confirmarCDigo.html',
    controller: 'confirmarCDigoCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});
